import { BASE_URL } from "../constants";
import axios from "axios"

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {'Content-type': 'application/json'}
});

export default instance