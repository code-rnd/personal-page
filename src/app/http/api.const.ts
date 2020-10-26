import axios from "axios";

export const BASE_URL = "http://jsonplaceholder.typicode.com/";

export const instance = axios.create({
  baseURL: BASE_URL,
});
