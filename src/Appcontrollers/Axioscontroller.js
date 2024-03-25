import axios from "axios";
const baseURL = process.env.REACT_APP_API_BASE_URL;
const AxiosController = axios.create({
    baseURL: `${baseURL}/api`
});

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