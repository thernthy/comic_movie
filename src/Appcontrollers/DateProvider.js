import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetComicAxios } from "./comicXciosClient";
export const durateContext = createContext();

const DurateProvider = ({ children }) => {

    const fetchDurateMe = async () => {
        const response = await GetComicAxios.get(`comic/get?durate=all`, {
            headers:{
                'X-API-Key' : process.env.REACT_APP_API_KEY 
            }
        })
        let durate = response.data;
        return durate
    }

    const { data: durate } = useQuery({
        queryKey: ["durate"],
        queryFn: fetchDurateMe,
        staleTime: 1000,
    });


    return (
        <durateContext.Provider value={{ durate }}>
            {children}
        </durateContext.Provider>
    );
}

export default DurateProvider