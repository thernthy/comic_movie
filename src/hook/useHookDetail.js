import { useQuery } from "@tanstack/react-query";
import { GetComicAxios } from "../Appcontrollers/comicXciosClient";
import { useParams } from "react-router-dom";

export const UseGetDetailComic = () => {
    const { id } =  useParams()
    const { title } =  useParams()
    const { part } =  useParams()

    const fetchComicDetail = async (title, id, part) => {
        try {
            const response = await GetComicAxios.get(`/comic/detail?t=${title}&id=${id}&ep=${part}`, {
                headers: {
                    'X-API-Key' : process.env.REACT_APP_API_KEY
                }
            });
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

    const { data, isLoading, error, isError, refetch } = useQuery(
        {
            queryKey: ["detailcomic", id],
            queryFn: () => fetchComicDetail(title, id, part),
            staleTime: 1000,
            onSuccess: onSuccess,
            onError: onError,
        }
    )
    return {data, isLoading, error,  refetch}
}