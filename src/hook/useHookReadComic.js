import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { GetComicAxios } from "../Appcontrollers/comicXciosClient";

export const useHookReadComic = () => {
    const { id } = useParams()
    const { title } = useParams()
    const { curretPart } = useParams()
    const { maxPart } = useParams()

    const fetchMovieDetail = async (id, title, curretPart) => {
        const response = await GetComicAxios.get(`comic/view?t=${title}&id=${id}&ep=${curretPart}&mp=${maxPart}`, {
            headers: {
                'X-API-Key' : process.env.REACT_APP_API_KEY
            },
        })
        return response.data
    }


    const { data, isLoading, error, refetch} = useQuery(
        {
            queryKey: ["view-comic", id, curretPart],
            queryFn: () => fetchMovieDetail(id, title, curretPart),
            staleTime: 1000,
        }
    )

    return { data, isLoading, error, refetch}
}