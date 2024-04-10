import axios from "axios";
import { act } from "react-dom/test-utils";

export const GetComicAxios = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}`
});


export const AuthAxiosApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}`
})