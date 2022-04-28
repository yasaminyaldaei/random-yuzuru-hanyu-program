import axios from "axios";
import { BASE_URL } from "./routes";

export const apiHandler = axios.create({
  baseURL: BASE_URL,
});
