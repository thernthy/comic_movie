import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetComicAxios } from "./comicXciosClient";
export const plateContext = createContext();

const PlateProvider = ({ children }) => {

    const fetchPlate = async () => {
        const response = await GetComicAxios.get(`comic/get?plate=all`, {
            headers:{
                'X-API-Key' : process.env.REACT_APP_API_KEY 
            }
        })
        let plate = response.data;
        return plate
    }

    const { data: plate } = useQuery({
        queryKey: ["plate"],
        queryFn: fetchPlate,
        staleTime: 1000,
    });


    return (
        <plateContext.Provider value={{ plate }}>
            {children}
        </plateContext.Provider>
    );
}

export default PlateProvider