import { useEffect, useState } from "react";

import { RandomProgram } from "./components/RandomProgram";
import { VideosList } from "./components/VideosList";

import { getRandomProgram } from "./utils/randomProgramSelector";

import "./App.css";

function App() {
  const [randomProgram, setRandomProgram] = useState("");

  const fetchRandomProgram = async () => {
    const program = await getRandomProgram();
    setRandomProgram(program);
  };

  useEffect(() => {
    fetchRandomProgram();
  }, []);

  return (
    <div className="page-container">
      <section>
        <header>Random Yuzuru Hanyu Program!</header>
        <RandomProgram program={randomProgram} />
        <VideosList program={randomProgram} />
      </section>
    </div>
  );
}

export default App;
