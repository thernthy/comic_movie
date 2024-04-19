import React from "react";
import { UseGetDetailComic } from "../hook/useHookDetail";
import FetchingDataError from "../components/fetchingError/Index";
import { ComicDetail } from "../components/comicDetail";

function DetialPage(){
    const { data, isLoading, error,  refetch } = UseGetDetailComic();

    const renderDetailComic = () => {
        window.scrollTo(0, 0);
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

        return(
            <ComicDetail 
              id={data.targetData?.comic_title_id}
              created_at={data.targetData?.created_at}
              title={data.targetData?.title}
              paster={data.targetData?.photo_cover_path}
              description={data.targetData?.comic_dcr}
              curretPart={data.targetData?.comic_ep}
              ComicPart={data?.comicEpData}
            />
        )
    }

    return (
        <div  className={`detail_wrapper lg:px-14 py-3 rounded-md ${isLoading? 'h-screen' : 'h-fit'} text-white`}>
            { renderDetailComic() }
        </div>
      )
}


export default DetialPage;