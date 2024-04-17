
import { useContext, useState} from "react";
import { genresContext } from "../../Appcontrollers/useHookGenre";
import Menus from "../../data/Menu";


export const DateFilter = ({handleFilturDate, filterDate}) => {
    const handleFilterDate = (dateFilter) => {
        handleFilturDate(dateFilter)
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

export const GenreMenu = ({ handleGenreChange }) => {

    const handleMenutClick = (genreId) => {
        handleGenreChange(genreId)
    }
    const {data} = useContext(genresContext)

    return(
        <div className={`filter-wrapper  flex flex-row justify-center items-center bg-black`}>
                <div className="flex flex-row justify-center items-center gap-2">
                        <ul className="flex flex-row justify-between items-center text-white bg-black flex-wrap gap-2 py-2 px-2"
                        >
                        {data?.map((genre, index) => (
                        <li className="cursor-pointer py-2 px-4 text-sm text-red-400 hover:bg-red-400 hover:text-white" key={genre.id} onClick={()=>handleMenutClick(genre.id)}>
                                {genre.name} 
                        </li>
                    ))

                    }
                        </ul>
                </div>
        </div>
    )
}

export const ConsonantMenu = ({handleConsonant}) => {
    const handclickConsonant = (value) => {
        handleConsonant(value)
    }

    return(
        <div className={`filter-wrapper  flex flex-row justify-center items-center bg-black`}>
                <div className="flex flex-row justify-end items-center gap-4">
                        <ul className="flex flex-row justify-end items-center text-white bg-black flex-wrap gap-2  py-2 px-2"
                        >
                            {
                                Menus.consonant?.map((item, index) => (
                                    <li key={index} className="px-2 cursor-pointer text-red-400 mx-2 hover:bg-red-400 hover:text-white" onClick={()=>handclickConsonant(item.name)}>
                                        {item.name}
                                    </li>
                                ))
                            }
                        </ul>
                </div>
        </div>
    )
}

