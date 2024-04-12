import { Link } from 'react-router-dom';

const ComicCard = ({ id, title, poster }) => {

    return(
            <Link to={`/detail/${id}/${title}`}>
                        <li className="comic_item_card p-3 cursor-pointer text-white">{/*key={index} onClick={()=>viewDetailComic(Element.title, comicData)} */}
                            <div className="post-image">
                            <img
                            src={`https://kotv-001.com/${poster}`}
                            title={title}
                            alt={title} // Provide an alt attribute for accessibility
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
                                    {title}
                                </p>
                            </div>
                        </li>
            </Link>
    );
}


export default ComicCard;