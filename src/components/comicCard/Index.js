import { Link } from 'react-router-dom';
import rezinLogo  from '../../asset/img/rezin.png';
import { genresContext } from '../../Appcontrollers/useHookGenre';
import { useContext } from 'react';
import { plateContext } from '../../Appcontrollers/plate';
import { durateContext } from '../../Appcontrollers/DateProvider';

const ComicCard = ({ id, title, poster,  genreId, plateId, durateId }) => {
    const { data: genres } = useContext(genresContext)
    const { plate: plates } = useContext(plateContext)
    const { durate: durates} = useContext(durateContext)
    return(
            <Link to={`/detail/${id}/${title}`}>
                        <li className="comic_item_card p-3 cursor-pointer text-white ">{/*key={index} onClick={()=>viewDetailComic(Element.title, comicData)} */}
                            <div className="post-image relative border border-solid-3">
                                <ul className='flex flex-row justify-arou flex-wrap items-center absolute  left-0'>
                                    {plates?.map(p => 
                                        p.id === plateId?                                    
                                        <li className='py-1 px-1 bg-lime-400 mr-1 rounded-md' key={p.id}>
                                            <img src={p.flag.startsWith('images/') ? 'http://kotv-001.com/'+p.flag : p.flag} className='w-5' alt={p.name} />
                                        </li>
                                        : ''
                                     )}

                                    {genres?.map(genre => 
                                            genre.id===genreId? <li className='py-1 px-1 bg-red-400 text-xs mr-1 rounded-md' key={genre.id}>{genre.name}</li>: ''
                                     )}

                                    {durates?.map(d => 
                                            d.id===durateId? <li className='py-1 px-1 bg-red-400 text-xs mr-1 rounded-md' key={d.id}>{d.name}</li>: ''
                                     )}

                                </ul>
                            <img
                            src={`https://kotv-001.com/${poster}`}
                            title={title}
                            alt={title} // Provide an alt attribute for accessibility
                            className="h-52 :h-50 xl:h-70 w-full"
                            onError={(e) => {
                                // Handle image load errors
                                e.target.src = 'https://newtoki330.com/data/file/webtoon/6571f38409fb8_2tPR9J0s_6f158e7fa7b44e71c917830b367a20d641ff9a58.jpg'; // Replace with path to a placeholder image
                                e.target.onerror = null; // Prevent infinite loop in case placeholder image fails to load
                            }}
                            />
                            </div>
                            <div className="post_dcr_wrapper">
                                <p className="text-center py-2 px-2">
                                    {title}
                                </p>
                            </div>
                        </li>
            </Link>
    );
}


export default ComicCard;