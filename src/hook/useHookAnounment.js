import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetComicAxios } from "../Appcontrollers/comicXciosClient";

export const useHookAnounment = () => {
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState()
    const fetchAnountMent = async (page) => {
        try {
            const response = await GetComicAxios.get(`/comic/get?anountment=true&page=${page}&pageRequest=24`, {
                headers: {
                    'X-API-Key' : process.env.REACT_APP_API_KEY
                }
            });
            
            setPageCount(response.data.last_page)
            return response.data
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
    
    const { data, isLoading, error,  refetch } = useQuery(
        {
            queryKey: ["anounment", page],
            queryFn: () => fetchAnountMent(page),
            staleTime: 1000,
            onSuccess: onSuccess,
            onError: onError,
        }
    )

    return {data, isLoading, error, setPage, pageCount, refetch}
}