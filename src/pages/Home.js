import { faDrum, faEarListen } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Pagination from "../components/pageGinetion";
import { useHookComic } from "../hook/useHookComic";
import ComicCard from "../components/comicCard/Index";
import FetchingDataError from "../components/fetchingError/Index";
import { BottomHeader } from "../components/botomheader";
import { DataNotFound } from "../components/DatanotFound/index";
function Home() {
    const { 
            data,
            isLoading, 
            error, 
            setPage, 
            filterDate, 
            setFilterDate, 
            genre, 
            setGenre, 
            consonant,
            setConsonant, 
            pageCount, 
            plate, 
            setPlate,
            refetch
     } = useHookComic();


    const renderMovies = () => {
        if(isLoading){
            return(
                <div className='loding-wrapper fixed top-2/4 left-2/4 -translate-x-2/4 translate-y-2/4'> 
                    <span className="loader"></span> 
                </div>
            )
        }


        if(error || data.length === 0){
            return(
               <FetchingDataError refetch={refetch} />
            )
        }

          return (
            <>
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
                <Pagination 
                    setPage={setPage}
                    pageCount={pageCount}
                />
            </>
          )
           
    }

    return(
        <div className="comic-card-wrapper">
              <BottomHeader 
                    setGenres={[ setGenre, genre ]}  
                    setConsonants={[ setConsonant, consonant ]} 
                    setFilterDate={setFilterDate} 
                    filterDate={filterDate}
                    plates={[setPlate, plate]}
                />
                { renderMovies() }
        </div>
    )
}


export default Home;