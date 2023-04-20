import axios from "axios";

const { VITE_GAMES_URL } = import.meta.env;

const timeOut = 1000 * 5;

export const gamesInstance = axios.create({
  baseURL: VITE_GAMES_URL,
  timeout: timeOut,
});
