import { Link } from "react-router-dom"



export const Genre = ({genres}) => {
    if(genres){
        return(
            <>
            <div class="absolute right-0 z-50 mt-2 w-56 origin-top-right  rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                {/* <div class="py-1" role="none">
                 <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> 
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Edit</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Duplicate</a>
                </div>
                <div class="py-1" role="none">
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Archive</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Move</a>
                </div>
                <div class="py-1" role="none">
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Share</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-5">Add to favorites</a>
                </div>
                <div class="py-1" role="none">
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-6">Delete</a>
                </div> */}
                {genres?.map((genre, index) => (
                    <Link to={`categories=by/${genre.name}/${genre.id}`} key={genre.id} className="
                        text-red-400 
                        block px-4 
                        py-2 text-sm
                        hover:bg-red-400 hover:text-white
                        " role="menuitem" tabindex="-1" id="menu-item-0">
                        {genre.name}
                    </Link>
                ))

                }
            </div>
            </>
        )
    }
    if(!genres){
        return(
            <div class="absolute right-0 z-50 mt-2 w-56 text-center origin-top-right divide-y divide-gray-100 rounded-md bg-lime-500 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
               <div class="py-1" role="none">
                   <Link to={'/'} className="text-red-400 ">Not Found!</Link>
                </div>
            </div>
        )
    }
}