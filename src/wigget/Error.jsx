import React from "react";

function Error({message}) {
    return(
        <div className="error-wrapper h-screen w-screen bg-slate-300">
            <h2 className=" font-xl text-slate-600 text-center ">{message}</h2>
        </div>
    )
}

export default Error;