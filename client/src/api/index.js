import { apiHandler } from "./apiHandler";
import { RANDOM_PROGRAM, RANDOM_PROGRAM_YOUTUBE_VIDEOS } from "./routes";

export function getRandomProgram() {
  return apiHandler.get(RANDOM_PROGRAM).then((res) => res.data);
}

export function getYTVideos() {
  return apiHandler.get(RANDOM_PROGRAM_YOUTUBE_VIDEOS).then((res) => res.data);
}
