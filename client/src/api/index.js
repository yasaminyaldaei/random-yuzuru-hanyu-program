import { apiHandler } from "./apiHandler";
import { DEEP_LINK, RANDOM_PROGRAM } from "./routes";

export function getRandomProgram() {
  return apiHandler.get(RANDOM_PROGRAM).then((res) => res.data);
}

export function getDeepLink({ videoId }) {
  return apiHandler.get(DEEP_LINK, {
    params: {
      videoId,
    },
  });
}
