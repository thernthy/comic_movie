import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetComicAxios } from "../Appcontrollers/comicXciosClient";

export const useHookComic = () => {
    const [genre, setGenre] = useState(null)
    const [consonant, setConsonant] = useState(null)
    const [filterDate, setFilterDate] = useState(null)
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState()
    const fetchMovies = async (page, filterDate,  genre, consonant) => {
        try {
            const response = await GetComicAxios.get(`/comic?page=${page}&token=.thenthy${filterDate? '&filterBy='+ filterDate : '&filter=all'}${genre? '&requestCategory='+genre : ""}${consonant?'&consonant='+consonant:''}&pageRequest=24`, 
            {
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
            queryKey: ["comic", page, genre, filterDate, consonant],
            queryFn: () => fetchMovies(page, filterDate,  genre, consonant),
            staleTime: 1000,
            onSuccess: onSuccess,
            onError: onError,
        }
    )

    return {data, isLoading, error, setPage, filterDate, setFilterDate, setGenre, setConsonant, genre, pageCount, refetch}
}