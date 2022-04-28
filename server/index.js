"use strict";

const express = require("express");
const axios = require("axios");

require("dotenv").config();

const PROGRAMS = require("../data/programs.json");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";
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

let program = "";
(async function setRandomProgram() {
  program = await getRandomProgram();
})();

// App
const app = express();

app.get("/", (req, res) => {
  res.send("This a Random Yuzuru Hanyu Program Service!");
});

app.get("/random-program", async (req, res) => {
  if (program) {
    res.send({
      program,
    });
  } else {
    res.sendStatus(500);
  }
});

app.get("/random-program-yt-videos", (req, res) => {
  if (program) {
    getYTVideos({ program })
      .then((data) => {
        res.send({
          items: data.items,
        });
      })
      .catch((error) => {
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(500);
  }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
