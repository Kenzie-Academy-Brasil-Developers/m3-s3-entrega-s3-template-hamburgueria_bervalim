import axios from "axios";

export const kenzieBurguerApi = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/",
  timeout: 8 * 1000,
});
