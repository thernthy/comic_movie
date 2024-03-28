
import { faDrum } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { handleDetailTitle } from "../router";
import { useNavigate } from 'react-router-dom';
import useFetchComicData from '../Appcontrollers/ComicDataController';
import DataNotFoundLoading from "../components/Datanotfound";

function Popularity() {
    const [requestToken] = useState(process.env.REACT_APP_ACCESS_TOKEN);
    const [comicData, setComicData] = useState([]);
    const [filter, setFilter] = useState('complated');
    const [loading, setLoading] = useState(true);

    //hook if there any error  while  req 
    const [reqError, setReqError] = useState({rqErorrSt:false, rqErorrMs: null})
    //get fetchComic Data funtion from useFetchComicData to make API request 
    const { fetchComicData, error } = useFetchComicData(); 

    const navigate = useNavigate();
    const viewDetailComic  = (title, newComicData) => {
        const queryString = `?titles=${encodeURIComponent(title)}`;//&newComicData=${encodeURIComponent(newComicData)}
        navigate(`/detail${queryString}`);
    };
    useEffect(() => {
        //if any error after req hook new reqError to ture && error sm
        if(error!=''){
            setReqError({rqErorrSt:true, rqErorrMs:error})
        }
        fetchComicData(requestToken, setLoading, setComicData, 'optional', filter);
    },[requestToken])
    return(
        <div className="comic-card-wrapper">
            {reqError.rqErorrSt?
                <DataNotFoundLoading message={reqError.rqErorrMs} />
                : ''
            }
               <ul className="comic_items_wrapper grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-1">
                {comicData.map((Element, index)=>(
                    <li className="comic_item_card p-3 cursor-pointer" key={index} onClick={()=>viewDetailComic(Element.title, comicData)}>
                        <div className="post-image">
                        <img
                        src={`https://kotv-001.com/${Element.movei_cover_path}`}
                        title={Element.title}
                        alt={Element.title} // Provide an alt attribute for accessibility
                        className="lg:h-60 xl:h-70"
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


export default Popularity;