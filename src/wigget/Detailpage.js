import React, { useEffect, useState } from "react";
import cardItemIformation from '../data/Carddata';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from 'react-router-dom';
import {faHeart, faCalendar} from '@fortawesome/free-solid-svg-icons';
import { data } from "autoprefixer";
import { useLocation } from "react-router-dom";
function DetialPage({comicData, comicTitle, doPageActiveAnime}){
    const { titles } = useParams();
    const [currentDate, setCurrentDate] = useState(new Date());
    // useEffect(() => {
    //     const detail_wrapper = document.querySelector('.detail_wrapper')
    //     detail_wrapper.classList.add(doPageActiveAnime)
    // }, [])
   console.log(comicData)
   const filteredComic = comicData.filter(item => item.title);
    if (filteredComic.length === 0) {
        return <div>Comic not found!</div>;
      }
      const comic = filteredComic[0];
      const comicEp = [
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:1, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:2, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:3, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:4, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:5, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:6, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:7, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:8, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:9, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:10, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:11, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:12, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:13, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:14, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:15, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:16, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:17, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:18, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:19, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:20, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:21, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:22, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:23, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:24, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:25, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:26, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:27, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:28, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:29, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:30, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:31, created_at:currentDate.toLocaleString()},
        {comicName: comic.comic_name, cover_photo:comic.comic_cover_photo, epsode:32, created_at:currentDate.toLocaleString()},
      ]
      return (
        <div className="detail_wrapper lg:px-14">
              <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className=" h-80 w-7/12 flex flex-row justify-center items-center bg-slate-200">
                    <img src={'https://kotv-001.com/'+comic.movei_cover_path} title={comic.title} className=" h-5/6"/>
                </div>
                <div className="">
                    <div className="px-2 py-3">
                        <p className=" leading-relaxed">{comic.description}</p>
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
                        comicEp.map((Element, key) => (
                            <li key={key} className=" relative">
                                    <img className="h-60" src={Element.cover_photo} />
                                <div>
                                    <div className="title_wrapper">
                                        <h3 className=" text-gray-600 underline">{Element.comicName}</h3>
                                    </div>
                                    <h4><FontAwesomeIcon icon={faCalendar} /> <span>{Element.created_at}</span></h4>
                                </div>
                                <div className="ep p-4 rounded-full absolute bottom-2/4 z-10 -right-1/2 -translate-x-2/4 -translate-y-2/4 bg-red-600">
                                    <h2 className=" text-center">{Element.epsode}</h2>
                                </div>
                            </li>
                        ))
                    }   
                </ul>
            </div>
        </div>
      )
}


export default DetialPage;