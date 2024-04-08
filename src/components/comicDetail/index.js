
import {faHeart, faCalendar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDate, formatDate2 } from '../DataFormator/DateFormat';

export const ComicDetail = ({id, title, paster, description, created_at, curretPart, ComicPart}) => {
    console.log(ComicPart)
    const poserPath  = `https://kotv-001.com/${paster}`;
  return(
    <>
        <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className=" h-80 w-7/12 flex flex-row justify-center items-center bg-slate-200 px-4 rounded-md">
                <img src={'https://kotv-001.com/'+paster} title={title} className=" h-5/6"/>
            </div>
            <div className="">
                <div className="px-2 pb-3">
                    <h2 className=' text-2xl'>{title}</h2>
                </div>
                <div className="px-2 py-3">
                    <p className=" leading-relaxed pl-5 pr-4">{description}</p>
                    <p className='py-2 pl-5 text-green-600'><b>{formatDate2(created_at)}</b></p>
                </div>
                <div className="user_take_action btn flex flex-row  justify-start items-center mt-3 px-8">
                    <button  className="flex flex-row justify-between items-center outline-none px-3 py-2 bg-lime-600 rounded-xl mx-2 whitespace-normal font-semibold"><FontAwesomeIcon icon={faHeart}  className=" shadow-md p-3 rounded-full mr-3 text-red-50"/><span>Favorite</span></button>
                    <button  className="flex flex-row justify-between items-center outline-none px-3 py-2 bg-red-400 rounded-xl  mx-2 whitespace-normal font-semibold"><FontAwesomeIcon icon={faHeart}   className=" shadow-md p-3 rounded-full mr-3 text-red-50"/><span>Favorite</span></button>
                    <button  className="flex flex-row justify-between items-center outline-none px-3 py-2 bg-slate-600 rounded-xl  mx-2 whitespace-normal font-semibold"><FontAwesomeIcon icon={faHeart} className=" shadow-md p-3 rounded-full mr-3 text-red-50" /><span>Read</span></button>
                </div>
            </div>
        </div>
        <div className="pt-5 pb-6">
            <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-1">
                {
                    ComicPart?.map((Element, key) => (
                        <li key={key} className=" relative px-1">
                                <img className="h-60" src={poserPath} />
                            <div>
                                <div className="title_wrapper">
                                    <h3 className=" text-gray-600 underline">{Element.comicName}</h3>
                                </div>
                                <h4 className='px-2'>
                                    <FontAwesomeIcon icon={faCalendar}
                                     className=' text-green-700 px-1' 
                                    /> 
                                    <span>{ formatDate(Element.created_at) }</span>
                                </h4>
                            </div>
                            <div className="ep p-4 
                                    rounded-full 
                                    absolute 
                                    top-2/4 
                                    z-10 
                                    left-2/4 
                                    -translate-x-2/4 
                                    -translate-y-2/4
                                    bg-green-700
                                    text-white
                                ">
                                <h2 className=" text-center">{Element.comic_ep}</h2>
                            </div>
                        </li>
                    ))
                }   
            </ul>
        </div>
    </>
  )
}