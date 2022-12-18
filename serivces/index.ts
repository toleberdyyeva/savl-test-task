import axios, { AxiosInstance } from "axios";

export const SavlApiInstance: AxiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "https://dev.solhall.io/v1/",
});
