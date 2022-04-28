import { getRandomNum } from "../api";
import { RANDOMIZATION } from "../constants/randomization";
import PROGRAMS from "../data/programs.json";
import { randomizationGenerator } from "./randomizationGenerator";

export async function getRandomProgram() {
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
  return PROGRAMS?.[randomIndex]?.program_name;
}
