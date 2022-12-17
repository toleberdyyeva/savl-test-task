import axios from "axios";

export const ErrorParse = (e: any) => {
  if (axios.isAxiosError(e)) {
    return { ...e, isAxiosError: true };
  }
  return { ...e, isAxiosError: false };
};
