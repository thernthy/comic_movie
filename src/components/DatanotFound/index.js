
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



export const DataNotFound = ({message}) => {
    return (
        <div className=" flex flex-col justify-center items-center sm:py-1 md:py-4">
            <lord-icon
                src="https://cdn.lordicon.com/xumlwjxf.json"
                trigger="loop"
                delay="1500"
                colors="primary:#e83a30,secondary:#e83a30,tertiary:#faddd1"
                style={{width:"250px",height:"250px"}}>
            </lord-icon>
            <h1 className="text-5xl uppercase  text-red-500 font-extrabold py-5 text-center">{message}</h1>
            <h1 className="text-8xl uppercase  text-red-500 font-extrabold py-5">404</h1>
            <button className="border border-solid border-spacing-2 px-2 py-4 rounded-md border-white">
                <span>
                <FontAwesomeIcon icon={faArrowAltCircleLeft}  className="px-2 text-2xl text-red-600"/>
                </span>
                <Link to={'/'} className=" whitespace-nowrap text-2xl pr-4 font-medium text-white">Back Home</Link>
            </button>
    </div>
    )
}