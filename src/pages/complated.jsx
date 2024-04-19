
import React from "react";
import { useHookCompleted } from "../hook/useHookCompleted";
import FetchingDataError from "../components/fetchingError/Index";
import ComicCard from "../components/comicCard/Index";
import Pagination from "../components/pageGinetion";
function Completed() {
   const {data, isLoading, error, setPage, pageCount, refetch} = useHookCompleted();
   const renderCompleteComic = () => {
      if(isLoading) {
        return(
            <div className='loding-wrapper fixed top-2/4 left-2/4 -translate-x-2/4 translate-y-2/4'> 
                    <span className="loader"></span> 
            </div>
        )
      }

      if(error || data.length === 0) {
        return(
           <FetchingDataError refetch={refetch} />
        )
      }
      return(
        <>
            <ul className="comic_items_wrapper grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-1">
                { data?.map(movie => (
                        <ComicCard
                                key={movie.comic_title_id}
                                title={movie.title}
                                poster={movie.photo_cover_path}
                                id={movie.comic_title_id}
                                year={movie.created_at}
                                genreId={movie.comic_category_id}
                                plateId={movie.Id_plate}
                                durateId={movie.Id_durate}
                            />
                            
                        ))
                }
            </ul>
        </>
      )
   }

    return(
        <div className="comic-card-wrapper">
            { renderCompleteComic() }

            <Pagination 
                setPage={setPage}
                pageCount={pageCount}
            />
        </div>
    )
}


export default Completed;