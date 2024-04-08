import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { faColonSign } from "@fortawesome/free-solid-svg-icons";
import { GetComicAxios } from "../Appcontrollers/comicXciosClient";

export const useHookComic = () => {
    const httpClient = process.env.REACT_APP_API_BASE_URL;
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState()
    // URL = `/comic?page=${page}&token=.thenthy&filter=all`;
    const fetchMovies = async (page) => {
        try {
            const response = await GetComicAxios.get(`/comic?page=${page}&token=.thenthy&filter=all&pageRequest=24`, {
                headers: {
                    'X-API-Key' : process.env.REACT_APP_API_KEY
                }
            });
      
            setPageCount(response.data.last_page)
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
            queryKey: ["comic", page],
            queryFn: () => fetchMovies(page),
            staleTime: 1000,
            onSuccess: onSuccess,
            onError: onError,
        }
    )

    return {data, isLoading, error, setPage, pageCount, refetch}
}