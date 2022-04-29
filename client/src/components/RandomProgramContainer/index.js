import { useEffect, useState } from "react";

import { RandomProgram } from "../RandomProgram";
import { VideosList } from "../VideosList";

import { getRandomProgram } from "../../api";

import "./RandomProgramContainer.css";

export default function RandomProgramContainer() {
  const [randomProgram, setRandomProgram] = useState("");
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(false);

  const fetchRandomProgram = async () => {
    try {
      const { program, videos } = await getRandomProgram();
      setRandomProgram(program);
      setVideos(videos);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    fetchRandomProgram();
  }, []);

  return (
    <section className="random-program-container">
      <header className="random-program-title">
        Random Yuzuru Hanyu Program!
      </header>
      <RandomProgram program={randomProgram} />
      <VideosList program={randomProgram} videos={videos} error={error} />
    </section>
  );
}
