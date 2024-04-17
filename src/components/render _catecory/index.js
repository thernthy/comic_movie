import { Link } from "react-router-dom"



export const Genre = ({genres, setGenre, currentPath}) => {
    const handleMenutClick = (genreId) => {
        setGenre(genreId)
    }
    if(genres){
        return(
            <>
                    {genres?.map((genre, index) => (
                        <li className="cursor-pointer py-2 px-4 text-sm text-red-400 hover:bg-red-400 hover:text-white" key={genre.id} onClick={handleMenutClick(genre.id)}>
                            {/* <Link to={`categories=by/${genre.name}/${genre.id}`} key={genre.id} className={`
                            
                                text-red-400 
                                block px-4 
                                py-2 text-sm
                                hover:bg-red-400 hover:text-white
                                ${currentPath === "/categories=by/" + encodeURIComponent(genre.name) ? encodeURIComponent(genre.name) : encodeURIComponent(genre.name) + "/" + genre.id} ${currentPath === "/categories=by/" + encodeURIComponent(genre.name) + "/" + genre.id ? "bg-red-400 text-white" : ""}
                                `} role="menuitem" tabIndex="-1" id="menu-item-0"> */}
                                {genre.name} 
                            {/* </Link> */}
                        </li>
                    ))

                    }
            </>
        )
    }
    if(!genres){
        return(
            <div className="absolute right-0 z-50 mt-2 w-56 text-center origin-top-right divide-y divide-gray-100 rounded-md bg-lime-500 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
               <div className="py-1" role="none">
                   <Link to={'/'} className="text-red-400 ">Not Found!</Link>
                </div>
            </div>
        )
    }
}