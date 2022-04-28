import { RANDOMIZATION } from "../constants/randomization";
import { localeDateStringGenerator } from "./localeDateStringGenerator";

export function randomizationGenerator({ rnd = RANDOMIZATION.new }) {
  if (rnd === RANDOMIZATION.date)
    return RANDOMIZATION.date.concat(".").concat(localeDateStringGenerator());

  return RANDOMIZATION.new;
}
