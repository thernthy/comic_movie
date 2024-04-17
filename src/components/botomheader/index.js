
import { useState } from "react";
import { ConsonantMenu, DateFilter, GenreMenu } from "./menuFilture";

export const BottomHeader = ({setGenre, setFilterDate, filterDate, setConsonant}) => {
    const [target, setTarget] = useState('요일별');

    const handleShowing = (target) => {
        setTarget(target);
    }

    const RenderMenu = ({ target, setGenre, setFilterDate, setConsonant, filterDate }) => {
        const handleConsonant = (consonant) => {
            setConsonant(consonant)
        }
        const handleFilturDate = (filterDate) => {
            setFilterDate(filterDate)
        }
        const handleGenreChange = (genre) => {
            setGenre(genre); // Call setGenre only when needed, not during rendering
        };

        if (target === "요일별") {
            return <DateFilter handleFilturDate={handleFilturDate} filterDate={filterDate} />;
        }

        if (target === "장르별") {
            return <GenreMenu handleGenreChange={handleGenreChange} />;
        }

        if (target === "자음") {
            return <ConsonantMenu handleConsonant={handleConsonant} />;
        }

        return null;
    }

      return(
          <div className={`filter-wrapper`}>
              <ul className="flex flex-row justify-evenly items-center bg-black bg-lime-500  w-full">
                  <li className={`px-4 py-2 text-center text-white cursor-pointer w-full ${target === '요일별'? 'bg-red-400' : ''}`} onClick={() => handleShowing('요일별')}>        
                      요일별
                  </li>
                  <li className={`px-4 py-2 text-center text-white cursor-pointer w-full ${target === '장르별'? 'bg-red-400' : ''}`} onClick={() => handleShowing('장르별')}>        
                      장르별
                  </li>
                  <li className={`px-4 py-2 text-center text-white cursor-pointer w-full ${target === '자음'? 'bg-red-400' : ''}`} onClick={() => handleShowing('자음')}>        
                      자음
                  </li>
              </ul>
              <div className="menue-wsicher-wrapper">
                <RenderMenu target={target} setGenre={setGenre} setFilterDate={setFilterDate} setConsonant={setConsonant}  filterDate={filterDate}/>
              </div>
          </div>
      );
}