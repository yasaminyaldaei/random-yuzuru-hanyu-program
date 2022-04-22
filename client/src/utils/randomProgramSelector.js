import { getRandomNum } from "../api";
import PROGRAMS from "../data/programs.json";

export async function getRandomProgram() {
  let randomIndex = undefined;
  const max = PROGRAMS.length - 1;
  try {
    randomIndex = await getRandomNum({ max });
  } catch {
    randomIndex = Math.floor(Math.random() * max);
  }
  return PROGRAMS?.[randomIndex]?.program_name || 0;
}
