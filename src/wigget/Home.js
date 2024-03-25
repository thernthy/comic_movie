import { faDrum } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import cardItemIformation from '../data/Carddata';
function Home({viewDetail, doPageActiveAnime, comicData}) {
    const viewDetailComic = (path, name) => {
        viewDetail(path, name)
    }
    useEffect(() => {
        const CardWrapper = document.querySelector('.comic-card-wrapper')
        CardWrapper.classList.add(doPageActiveAnime);
    }, [])
    return(
        <div className="comic-card-wrapper">
               <ul className="comic_items_wrapper grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-1">
                {comicData.map((Element, index)=>(
                    <li className="comic_item_card p-3 cursor-pointer" key={index} onClick={()=>viewDetailComic('viewdetail/',Element.comic_name)}>
                        <div className="post-image">
                        <img
                        src={`https://kotv-001.com/${Element.movei_cover_path}`}
                        title={Element.title}
                        alt={Element.title} // Provide an alt attribute for accessibility
                        className="h-80"
                        onError={(e) => {
                            // Handle image load errors
                            e.target.src = 'https://newtoki330.com/data/file/webtoon/6571f38409fb8_2tPR9J0s_6f158e7fa7b44e71c917830b367a20d641ff9a58.jpg'; // Replace with path to a placeholder image
                            e.target.onerror = null; // Prevent infinite loop in case placeholder image fails to load
                        }}
                        />
                        </div>
                        <div className="post_dcr_wrapper">
                            <p className="text-center py-2 px-2">
                                {Element.title}
                            </p>
                        </div>
                    </li>
                ))
                }
               </ul>
            </div>
    )
}


export default Home;