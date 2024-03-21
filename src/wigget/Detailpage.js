import React, { useEffect } from "react";
import cardItemIformation from '../data/Carddata';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faCalendar} from '@fortawesome/free-solid-svg-icons';
function DetialPage({comicTitle, doPageActiveAnime}){
    useEffect(() => {
        const detail_wrapper = document.querySelector('.detail_wrapper')
        detail_wrapper.classList.add(doPageActiveAnime)
    }, [])
    const filteredComic = cardItemIformation.filter(item => item.comic_name === comicTitle);
    if (filteredComic.length === 0) {
        return <div>Comic not found!</div>;
      }
      const comic = filteredComic[0];
      return (
        <div className="detail_wrapper lg:px-14">
              <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className=" h-80 w-7/12 flex flex-row justify-center items-center bg-slate-200">
                    <img src={comic.comic_cover_photo} title={comic.comic_name} className=" h-5/6"/>
                </div>
                <div className="">
                    <div className="px-2 py-3">
                        <p className=" leading-relaxed">{comic.comic_dcr}</p>
                    </div>
                    <div className="user_take_action btn flex flex-row  justify-start items-center mt-3">
                        <button  className="flex flex-row justify-between items-center outline-none px-3 py-2 bg-lime-600 rounded-xl mx-2 whitespace-normal font-semibold"><FontAwesomeIcon icon={faHeart}  className=" shadow-md p-3 rounded-full mr-3 text-red-50"/><span>Favorite</span></button>
                        <button  className="flex flex-row justify-between items-center outline-none px-3 py-2 bg-red-400 rounded-xl  mx-2 whitespace-normal font-semibold"><FontAwesomeIcon icon={faHeart}   className=" shadow-md p-3 rounded-full mr-3 text-red-50"/><span>Favorite</span></button>
                        <button  className="flex flex-row justify-between items-center outline-none px-3 py-2 bg-slate-600 rounded-xl  mx-2 whitespace-normal font-semibold"><FontAwesomeIcon icon={faHeart} className=" shadow-md p-3 rounded-full mr-3 text-red-50" /><span>Favorite</span></button>
                    </div>
                </div>
              </div>
              <div className="pt-5">
                <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-1">
                    {
                        cardItemIformation.map((Element, key) => (
                            <li key={key} className=" relative">
                                    <img className="h-60" src={Element.comic_cover_photo} />
                                <div>
                                    <div className="title_wrapper">
                                        <h3 className=" text-gray-600 underline">{Element.comic_name}</h3>
                                    </div>
                                    <h4><FontAwesomeIcon icon={faCalendar} /> <span>20/3/2023</span></h4>
                                </div>
                                {/*<div className="ep p-4 rounded-full absolute bottom-2/4 z-10 -right-1/2 -translate-x-2/4 -translate-y-2/4 bg-red-600">
                                    <h2 className=" text-center">1</h2>
                                </div>*/}
                            </li>
                        ))
                    }   
                </ul>
            </div>
        </div>
      )
}


export default DetialPage;