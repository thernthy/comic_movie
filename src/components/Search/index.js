
import FetchingDataError from "../fetchingError/Index";

import ComicCard from "../comicCard/Index";
import Pagination from "../pageGinetion";
import { height, width } from "@fortawesome/free-solid-svg-icons/fa0";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
export const Search = ({
    data, 
    isLoading, 
    error, 
    refetch,
    setPage,
    pageCount
}) => {
    
  const renderSearchData = () => {
    if(isLoading){
        return(
            <div className='loding-wrapper fixed top-2/4 left-2/4 -translate-x-2/4 translate-y-2/4'> 
                <span className="loader"></span> 
            </div>
        )
    }
    if(error) {
        return(
            <FetchingDataError refetch={refetch} />
        )
    }
    if(data.length === 0) {
        return(
            <div className=" flex flex-col justify-center items-center py-4">
                <lord-icon
                    src="https://cdn.lordicon.com/xumlwjxf.json"
                    trigger="loop"
                    delay="1500"
                    colors="primary:#e83a30,secondary:#e83a30,tertiary:#faddd1"
                    style={{width:"250px",height:"250px"}}>
                </lord-icon>
                <h1 className="text-5xl uppercase  text-red-500 font-extrabold py-5">Search No Found</h1>
                <h1 className="text-8xl uppercase  text-red-500 font-extrabold py-5">404</h1>
                <button className="border border-solid border-spacing-2 px-2 py-4 rounded-md border-white">
                    <span>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft}  className="px-2 text-2xl text-red-600"/>
                    </span>
                    <Link to={'/'} className=" whitespace-nowrap text-2xl pr-4 font-medium text-white">Back Home</Link>
                </button>
            </div>
            
        )
    }
    
    return(
        <ul className="comic_items_wrapper grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-1">
            { data?.map(movie => (
                    <ComicCard
                            key={movie.comic_title_id}
                            title={movie.title}
                            poster={movie.photo_cover_path}
                            id={movie.comic_title_id}
                            year={movie.created_at}
                    />
                        
                 ))
            }
        </ul>
    )
  }



  return(
    <div className="comic-card-wrapper">
         { renderSearchData() }       

         <Pagination 
             pageCount={pageCount}
             setPage={setPage}
         />
    </div>
  )
}