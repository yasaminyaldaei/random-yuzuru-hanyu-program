import { useEffect, useState } from "react";

import { RandomProgram } from "../RandomProgram";
import { VideosList } from "../VideosList";

import { getRandomProgram } from "../../utils/randomProgramSelector";

import "./RandomProgramContainer.css";

export default function RandomProgramContainer() {
  const [randomProgram, setRandomProgram] = useState("");

  const fetchRandomProgram = async () => {
    const program = await getRandomProgram();
    setRandomProgram(program);
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
      <VideosList program={randomProgram} />
    </section>
  );
}
