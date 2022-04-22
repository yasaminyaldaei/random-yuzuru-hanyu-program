import axios from "axios";
import { RANDOM_INT_NUM_ROUTE } from "./routes";

export function getRandomNum({
  num = 1,
  min = 0,
  max = 1,
  col = 1,
  base = 10,
  format = "plain",
  rnd = "new",
}) {
  return axios
    .get(RANDOM_INT_NUM_ROUTE, {
      params: {
        num,
        min,
        max,
        col,
        base,
        format,
        rnd,
      },
    })
    .then((res) => res.data);
}