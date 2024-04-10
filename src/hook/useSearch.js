import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetComicAxios } from "../Appcontrollers/comicXciosClient";

export const useHookSearch = () => {
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState();
    const [search, setSearch] = useState("")
    const fetchSearch = async (page, search) => {
        try {
            const response = await GetComicAxios.get(`/comic?page=${page}&token=.thenthy&search=${search}&pageRequest=24`, {
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
            queryKey: ["searchData", page, search],
            queryFn: () => fetchSearch(page, search),
            staleTime: 1000,
            onSuccess: onSuccess,
            onError: onError,
        }
    )

    return {data, isLoading, error, setPage, pageCount, setSearch, search, refetch}
}