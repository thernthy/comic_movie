
import { useState } from "react";
import { ConsonantMenu, DateFilter, GenreMenu, Platemenu } from "./menuFilture";

export const BottomHeader = ({
    setGenres, 
    setFilterDate, 
    filterDate, 
    setConsonants, 
    plates
}) => {
    const [target, setTarget] = useState('요일별');

    const handleShowing = (target) => {
        setTarget(target);
    }

    const RenderMenu = ({ target, setFilterDate,  filterDate }) => {
        const handleConsonant = (consonant) => {
            setConsonants[0](consonant)
        }
        const handleFilturDate = (filterDate) => {
            setFilterDate(filterDate)
        }
        const handleGenreChange = (genre) => {
            setGenres[0](genre); // Call setGenre only when needed, not during rendering
        };

        const handlePlate = (getValue) => {
            plates[0](getValue)
        }

        if (target === "요일별") {
            return <DateFilter handleFilturDate={ handleFilturDate } filterDate={filterDate} />;
        }

        if (target === "장르별") {
            return <GenreMenu handleGenreChange={ handleGenreChange } seletedGener={ setGenres[1] } />;
        }

        if (target === "자음") {
            return <ConsonantMenu handleConsonant={ handleConsonant } sletedcosont={ setConsonants[1] }/>;
        }

        if (target === "플랫폼") {
            return <Platemenu handlePlate={handlePlate} seletedPalet={plates[1]}/>;
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
                  <li className={`px-4 py-2 text-center text-white cursor-pointer w-full ${target === '플랫폼'? 'bg-red-400' : ''}`} onClick={() => handleShowing('플랫폼')}>        
                    플랫폼
                  </li>
              </ul>
              <div className="menue-wsicher-wrapper">
                <RenderMenu target={target}  setFilterDate={setFilterDate}  filterDate={filterDate}/>
              </div>
          </div>
      );
}