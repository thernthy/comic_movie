
import { useContext, useState} from "react";
import { genresContext } from "../../Appcontrollers/useHookGenre";
import { plateContext } from "../../Appcontrollers/plate";
import Menus from "../../data/Menu";


export const DateFilter = ({handleFilturDate, filterDate}) => {
    const handleFilterDate = (dateFilter) => {
        if(dateFilter!= filterDate){
            handleFilturDate(dateFilter)
        }else{
            handleFilterDate(null)
        }
    }

    return(
        <div className={`filter-wrapper  flex flex-row justify-center items-center bg-black`}>
                <div className="flex flex-row justify-center items-center gap-2">
                        <ul className="flex flex-row justify-between items-center text-white bg-black flex-wrap gap-2 py-2 px-2"
                        >
                                {
                                    Menus.menuFilturList.map((element, index)=>(
                                        <li className={`fiter-menu px-3 py-2 m-2 rounded-lg uppercase text-red-400 whitespace-nowrap cursor-pointer ${filterDate==element.spaceficVanlu? "bg-red-400 text-white": ''}`}  
                                                onClick={()=>handleFilterDate(element.spaceficVanlu)} 
                                                key={index}
                                            >
                                            {element.filturName}
                                        </li>
                                    ))
                                }
                        </ul>
                </div>
            </div> 
    )
}

export const GenreMenu = ({ handleGenreChange, seletedGener }) => {
    const handleMenutClick = (genreId) => {
        if(genreId!= seletedGener){
            handleGenreChange(genreId)
        }else{
            handleGenreChange(null)
        }
    }
    const {data} = useContext(genresContext)

    return(
        <div className={`filter-wrapper  flex flex-row justify-center items-center bg-black`}>
                <div className="flex flex-row justify-center items-center gap-2">
                        <ul className="flex flex-row justify-between items-center text-white bg-black flex-wrap gap-2 py-2 px-2"
                        >
                        {data?.map((genre, index) => (
                        <li className={`cursor-pointer py-2 px-4 text-sm text-red-400 hover:bg-red-400 hover:text-white ${seletedGener && seletedGener=== genre.id? 'bg-red-400 text-white' : '' }`} key={genre.id} onClick={()=>handleMenutClick(genre.id)}>
                                {genre.name} 
                        </li>
                    ))

                    }
                        </ul>
                </div>
        </div>
    )
}

export const ConsonantMenu = ({ handleConsonant , sletedcosont }) => {
    
    const handclickConsonant = (value) => {
        if(value != sletedcosont){
            handleConsonant(value)
        }else{
            handleConsonant(null)
        }
    }

    return(
        <div className={`filter-wrapper  flex flex-row justify-center items-center bg-black`}>
                <div className="flex flex-row justify-end items-center gap-4">
                        <ul className="flex flex-row justify-end items-center text-white bg-black flex-wrap gap-2  py-2 px-2"
                        >
                            {
                                Menus.consonant?.map((item, index) => (
                                    <li key={index} className={ `px-2 cursor-pointer text-red-400 mx-2 hover:bg-red-400 hover:text-white ${sletedcosont && sletedcosont === item.name? 'bg-red-400 text-white' : '' }`} onClick={()=>handclickConsonant(item.name)}>
                                        {item.name}
                                    </li>
                                ))
                            }
                        </ul>
                </div>
        </div>
    )
}
export const Platemenu = ({handlePlate, seletedPalet}) => {
    const { plate } = useContext(plateContext)

    const handclickConsonant = (value) => {
        if(value != seletedPalet){
            handlePlate(value)
        }else{
            handlePlate(null)
        }
    }

    return(
        <div className={`filter-wrapper  flex flex-row justify-center items-center bg-black`}>
                <div className="flex flex-row justify-end items-center gap-4">
                        <ul className="flex flex-row justify-end items-center text-white bg-black flex-wrap gap-3  py-2 px-2">
                            {
                                plate?.map((item, index) => (
                                    <li key={index} className={`
                                        px-2 cursor-pointer
                                         text-red-400 mx-2 hover:bg-red-400 hover:text-white ${seletedPalet && seletedPalet === item.name? 'bg-red-400 text-white' : '' }`} onClick={()=>handclickConsonant(item.name)}>
                                        {item.name}
                                    </li>
                                ))
                            }
                        </ul>
                </div>
        </div>
    )
}

