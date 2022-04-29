"use strict";

const express = require("express");
const axios = require("axios");
const cors = require("cors");
const cron = require("node-cron");
const fs = require("fs");

require("dotenv").config();

var corsOptions = {
  origin: "https://randomyuzu.fun",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const PROGRAMS = require("./programs.json");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";
const BASE_URL = "https://randomyuzu.fun/";
const RANDOMIZATION = {
  new: "new",
  date: "date",
};

// Routes
const RANDOM_INT_NUM_ROUTE = "https://www.random.org/integers/";
const YOUTUBE_DATA_ROUTE = "https://www.googleapis.com/youtube/v3/search";

// Utils

function localeDateStringGenerator({ date } = { date: new Date() }) {
  return date.toISOString().split("T")[0];
}

function randomizationGenerator({ rnd = RANDOMIZATION.new }) {
  if (rnd === RANDOMIZATION.date)
    return RANDOMIZATION.date.concat(".").concat(localeDateStringGenerator());

  return RANDOMIZATION.new;
}

// API calls
function getRandomNum({
  num = 1,
  min = 0,
  max = 1,
  col = 1,
  base = 10,
  format = "plain",
  rnd = "new",
}) {
  return axios
    .get(RANDOM_INT_NUM_ROUTE, {
      params: {
        num,
        min,
        max,
        col,
        base,
        format,
        rnd,
      },
    })
    .then((res) => res.data);
}

function getYTVideos({ program, maxResults = 10 }) {
  return axios
    .get(YOUTUBE_DATA_ROUTE, {
      params: {
        key: process.env.GAPI_KEY,
        part: "snippet",
        type: "video",
        maxResults,
        q: "Yuzuru Hanyu " + program,
      },
    })
    .then((res) => res.data);
}

// Controllers
async function getRandomProgram() {
  let randomIndex = undefined;
  const max = PROGRAMS.length - 1;
  try {
    randomIndex = await getRandomNum({
      max,
      rnd: randomizationGenerator({ rnd: RANDOMIZATION.date }),
    });
  } catch {
    randomIndex = Math.floor(Math.random() * max);
  }
  return PROGRAMS[randomIndex].program_name;
}

async function setData() {
  const program = await getRandomProgram();
  try {
    const result = await getYTVideos({ program });
    const videos = result.items;
    fs.writeFileSync("today.json", JSON.stringify({ program, videos }));
  } catch {
    fs.writeFileSync("today.json", JSON.stringify({ program, videos: [] }));
  }
}

cron.schedule("0 0 * * *", setData);

// App
const app = express();

app.get("/", (req, res) => {
  res.send("This a Random Yuzuru Hanyu Program Service!");
});

app.get("/random-program", cors(corsOptions), async (req, res) => {
  const rawData = fs.readFileSync("today.json");
  try {
    const program = JSON.parse(rawData);
    if (program) {
      res.send(program);
    } else {
      res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
  }
});

app.get("/deep-link", cors(corsOptions), (req, res) => {
  const ua = req.headers["user-agent"];
  const videoId = req.query.videoId;
  const rawData = fs.readFileSync("today.json");

  if (/^(facebookexternalhit)|(Twitterbot)|(Pinterest)/gi.test(ua)) {
    try {
      const { videos } = JSON.parse(rawData);
      const video = videos.find((item) => item.id.videoId === videoId);
      const metaTags = {
        url: BASE_URL + `?videoId=${videoId}`,
        domain: BASE_URL,
        imageUrl:
          video.snippet.thumbnails.high.url ||
          video.snippet.thumbnails.default.url,
        title: video.snippet.title,
        description: video.snippet.description,
        twitterCardType: "summary",
      };
      res.render("bot", metaTags);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  } else {
    res.redirect(BASE_URL + `?videoId=${videoId}`);
  }
});

app.set("view engine", "pug");

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
