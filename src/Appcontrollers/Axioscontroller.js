import axios from "axios";
import { error } from "console";
import { response } from "express";
import { config } from "yargs";

const AxiosController = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})


AxiosController.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

AxiosController.interceptors.response.use((response) => {
    return response;
},(error) =>{
    const {response} = error;
    if(response.status === 401){
        localStorage.removeItem('ACCESS_TOKEN');
    }
    throw error;
})


export default AxiosController;