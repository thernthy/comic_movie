
// import './style.css';
import React from "react";
import './style.css';
import ErrorServeSVg from "../../asset/img/serverError.svg"
const FetchingDataError = ({refetch}) => {

    return (
        <div className="error_wrapper py-2 pb-5 px-3 flex flex-col justify-center items-center h-4/5">
            <div className="error_svg_wrapper">
              <img src={ErrorServeSVg} alt="Server Error" className="h-64" />
            </div>
            <button  onClick={refetch} className="rounded-lg whitespace-nowrap text-lg py-2 px-4 text-red-500 border border-solid border-spacing-2 border-red-100">Let's try again</button>
        </div>
    )
}


export default FetchingDataError;