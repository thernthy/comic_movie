import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetComicAxios } from "../Appcontrollers/comicXciosClient";
import { useParams } from "react-router-dom";

export const useHookGenre = () => {
    const { genrename } =  useParams()
    const { genreId } = useParams()
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState()
    const fetchGenre = async (page, genrename, genreId) => {
        try {
            const response = await GetComicAxios.get(`comic/get?requestCategory=${genreId}&n=${genrename}&page=${page}`, {
                headers: {
                    'X-API-Key' : process.env.REACT_APP_API_KEY
                }
            });
      
            setPageCount(response.data.data.last_page)
            return response.data.data
          } catch (error) {
            // Handle errors here
            console.error('Error:', error);
            throw error;
          }
    }

    const onSuccess = (data) => {
        console.log("fetch succeeded!", data.data)
    }

    const onError = (error) => {
        console.log("fetch failed!", error)
    }
    
    const { data, isLoading, error, isError, refetch } = useQuery(
        {
            queryKey: ["comic", page, genrename, genreId],
            queryFn: () => fetchGenre(page, genrename, genreId),
            staleTime: 1000,
            onSuccess: onSuccess,
            onError: onError,
        }
    )

    return {data, isLoading, error, setPage, pageCount, refetch}
}