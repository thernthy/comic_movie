
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


const Viewcomic = ({
    id,
    title,
    comic_img_path,
    comic_server_site,
    comic_ep,
    maxPart,
    isLoading
}) => {
    const [imageLoadErrors, setImageLoadErrors] = useState([]); // State variable to track image loading errors
    const [retryCount, setRetryCount] = useState({}); // State variable to track retry count for each image

      // Function to handle image loading error for a specific image
      const handleImageError = (index) => {
        setImageLoadErrors((prevErrors) => [...prevErrors, index]); // Add index of image with error to the list of errors
      };
    
      // Function to attempt reloading images with errors
      const retryImageLoad = () => {
        const updatedRetryCount = { ...retryCount };
        imageLoadErrors.forEach((index) => {
          updatedRetryCount[index] = updatedRetryCount[index] ? updatedRetryCount[index] + 1 : 1;
        });
        setRetryCount(updatedRetryCount); // Update retry count for each image
    
        setImageLoadErrors([]); // Clear image loading errors to retry loading
    
        // Optionally, you can trigger a rerender here to attempt reloading the images
        // This depends on how your component is structured and how you're rendering the images
      };
    // const src = poster.startsWith('images/') ? `https://www.kotv-001.com/${poster}` : poster;
    const comicBooks = JSON.parse(comic_img_path, true);
    const updatedComicEp = comic_ep < maxPart ? comic_ep + 1 : comic_ep;
    const priviewtPart = comic_ep > 0 ? comic_ep - 1 : comic_ep;
    const handlePriview = () => {
        isLoading()
    }

    const handleNext = () => {
        isLoading()
    };

    return (
        <div className="col-md-12 col-lg-12 py-5 h-100" style={{
                display:"flex",
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "center"
            }}>
            <div style={{
                width:"100%",
                padding:"0 20px", 
                position: "fixed", 
                top:"50%", 
                left:"0", 
                transform:"translateY(-50%)",
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center"
                }}>
                <span className="h3 text-success shadow-sm py-2 px-2 rounded-pill">
                    <Link to={`/view/${id}/${maxPart}/${title}/${priviewtPart}`} onClick={handlePriview()}>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                    </Link>
                </span>
                <span className="h3 text-success shadow-sm py-2 px-2 rounded-pill" >
                    <Link  to={`/view/${id}/${maxPart}/${title}/${updatedComicEp}`} onClick={handleNext()}>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    </Link>
                </span>
            </div>
            {comicBooks?.map((item, index) => (
                <img
                key={index}
                src={comic_server_site === 1 ? `https://joatoon24.com/${item}` : item}
                alt={item}
                loading="lazy"
                style={{ width: "90%" }}
                onError={() => handleImageError(index)} // Handle image loading error for the current image
                />
            ))}
            <nav className="fixed bottom-2 bg-slate-600 shadow-lg pb-2 px-2 flex flex-col items-center justify-center rounded-md w-64">
                <ul className="flex flex-row items-center justify-between w-full">
                    <li className="text-white">
                        <div className=" py-3 px-3 rounded-full shadow-md">
                            <Link to={`/view/${id}/${maxPart}/${title}/${priviewtPart}`} onClick={handlePriview()}>
                                <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                            </Link>
                        </div>
                    </li>
                    <li className="text-white">
                        <Link to={`/detail/${id}/${title}`} onClick={handlePriview()}>
                            <div className=" py-3 px-3 rounded-full shadow-md">
                                <FontAwesomeIcon icon={faHome} />
                            </div>
                        </Link>
                    </li>
                    <li className="text-white">
                        <div className="  py-3 px-3 rounded-full shadow-md">
                            <Link  to={`/view/${id}/${maxPart}/${title}/${updatedComicEp}`} onClick={handleNext()}>
                                <FontAwesomeIcon icon={faArrowAltCircleRight} />
                            </Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Viewcomic