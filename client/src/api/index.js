import { apiHandler } from "./apiHandler";
import { RANDOM_PROGRAM } from "./routes";

export function getRandomProgram() {
  return apiHandler.get(RANDOM_PROGRAM).then((res) => res.data);
}
