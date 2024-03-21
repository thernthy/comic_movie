import { faDrum } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import cardItemIformation from '../data/Carddata';
function Home({viewDetail}) {
    const viewDetailComic = (path, name) => {
        viewDetail(path, name)
    }
    return(
        <div className="comic-card-wrapper">
               <ul className="comic_items_wrapper grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-1">
                {cardItemIformation.map((Element, index)=>(
                    <li className="comic_item_card p-3 cursor-pointer" key={index} onClick={()=>viewDetailComic('viewdetail/',Element.comic_name)}>
                        <div className="post-image">
                            <img src={Element.comic_cover_photo} title={Element.comic_name} className=" h-80"/>
                        </div>
                        <div className="post_dcr_wrapper">
                            <p className="text-center py-2 px-2">
                                {Element.comic_name}
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