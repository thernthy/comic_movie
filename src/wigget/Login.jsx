import React, { useState } from "react";
import '../css/login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate } from "react-router-dom";
import Home from "./Home";
function Login () {
    const [componetclassActive, setCompentActiveClass] = useState('')
    const handleSwichcomp = () =>{
        if(componetclassActive == 'active'){
            setCompentActiveClass('')
        }else{
            setCompentActiveClass('active')
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('submit');
        <Navigate to={'/home'} />
    }
    return(
        <div className="login-wrapper w-screen bg-slate-600">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <div className={`guest-log-wrapper flex flex-row justify-between items-center overflow-x-hidden whitespace-nowrap absolute ${componetclassActive}`}>
                    <form className=" shadow-lg" onSubmit={handleSubmit}>
                            <h3>Login</h3>
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Email or Phone" id="username" />

                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Password" id="password" />
                            <div className=" flex flex-row justify-between items-center">
                                <button className="border border-gray-400 border-solid py-2 px-4 mx-2 bg-lime-400" type="button"><Link to={'/'}>Login</Link></button>
                            </div>
                            <div className="form-swich-btn shadow-md hover:text-cyan-700">
                                <FontAwesomeIcon icon={componetclassActive==""? faArrowAltCircleRight : faArrowAltCircleLeft} onClick={handleSwichcomp}/>
                            </div> 
                    </form>
                    <form className="shadow-lg inactive" onSubmit={handleSubmit}>
                        <h3>Join Membership</h3>
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Email or Phone"  />

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" />
                        <div className=" flex flex-row justify-between items-center">
                            <button className="border border-gray-400 border-solid py-2 px-4 mx-2"><Link to={'/'}>Joine</Link></button>
                        </div>
                    </form>
            </div>
        </div>
    )
}


export default Login;