import axios, {AxiosInstance} from 'axios'

export const SavlApiInstance: AxiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
    baseURL: process.env.API_BASE_URL,
});