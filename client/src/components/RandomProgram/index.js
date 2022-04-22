import { useEffect, useState } from "react";
import { getRandomProgram } from "../../utils/randomProgramSelector";

export function RandomProgram() {
  const [randomProgram, setRandomProgram] = useState("");
  useEffect(() => {
    getRandomProgram().then((data) => setRandomProgram(data));
  }, []);
  return <div>{randomProgram && <p>{randomProgram}</p>}</div>;
}
