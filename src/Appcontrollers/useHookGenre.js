import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetComicAxios } from "./comicXciosClient";
export const genresContext = createContext();

const GenresProvider = ({ children }) => {

    const fetchGenres = async () => {
        const response = await GetComicAxios.get(`comic/get?category=all`, {
            headers:{
                'X-API-Key' : process.env.REACT_APP_API_KEY 
            }
        })
        return response.data
    }

    const { data } = useQuery({
        queryKey: ["category"],
        queryFn: fetchGenres,
        staleTime: 1000,
    });


    return (
        <genresContext.Provider value={{ data }}>
            {children}
        </genresContext.Provider>
    );
}

export default GenresProvider