import { apiHandler } from "./apiHandler";
import {
  DEEP_LINK,
  RANDOM_PROGRAM,
  RANDOM_PROGRAM_YOUTUBE_VIDEOS,
} from "./routes";

export function getRandomProgram() {
  return apiHandler.get(RANDOM_PROGRAM).then((res) => res.data);
}

export function getYTVideos() {
  return apiHandler.get(RANDOM_PROGRAM_YOUTUBE_VIDEOS).then((res) => res.data);
}

export function getDeepLink({ videoId }) {
  return apiHandler.get(DEEP_LINK, {
    params: {
      videoId,
    },
  });
}
