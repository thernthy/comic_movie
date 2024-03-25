import React, { useRef, useState } from "react";
import '../css/login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import AlertContainer from "../components/Error";
import AlertContainer from "../components/Error";
// import Buttons from "./Sliderbutton";
import { useStateContext }  from '../Appcontrollers/ContextProvider';
import AxiosController from "../Appcontrollers/Axioscontroller";

function Login () {
    const {setUser, setToken} = useStateContext();
    const [componetclassActive, setCompentActiveClass] = useState('')
    const [error, setError] = useState({message:null})
    const [message_status, setMessageStatus] = useState({alertType:null, textMessage:''});
    const usernameRef = useRef();
    const passwordRef = useRef();
    const rUsernameRef = useRef();
    const rPasswordRef = useRef();
    const rComfirmPasswordRef = useRef()
    const userInfor = [
        {'l' : { usernameRef, passwordRef }},
        {'r' : { rUsernameRef, rPasswordRef, rComfirmPasswordRef }}
    ]
    const handleSwichcomp = () =>{
        if(componetclassActive == 'active'){
            setCompentActiveClass('')
        }else{
            setCompentActiveClass('active')
        }
    }
    const handleSubmit = (e, login) => {
        e.preventDefault();
        const signNotAllow = /[\/><?\\{}&#$!=\-+]/g;
        const data = login.login ? [
            {
                username: userInfor[0].l.usernameRef.current.value || false,
                password: userInfor[0].l.passwordRef.current.value || false
            }
        ] : [
            {
                username: userInfor[1].r.rUsernameRef.current.value || false,
                password: userInfor[1].r.rPasswordRef.current.value || false,
                confirm_password: userInfor[1].r.rComfirmPasswordRef.current.value || false
            }
        ];

        if (!data[0].username) {
            AlertErrorMs({status:true},'error', "please enter username!");
        } else if (!data[0].password) {
            AlertErrorMs({status:true},'error', "please enter password!");
        } else if (data[0].username && signNotAllow.test(data[0].username)) {
            AlertErrorMs({status:true}, 'error', "please make sure your name!");
        } else if (!login.login && data[0].password !== data[0].confirm_password) {
            AlertErrorMs({ status: true }, 'warning', 'Confirm password does not match!');
        } else {
            handleSubmitSend({ login: login.login? true : false }, { userData:[data[0].username, data[0].password] });
        }
    }
    const handleSubmitSend = (login, userData) => {
        const dataSend = {
            username: userData.userData[0],
            password: userData.userData[1]
        }
        if(login){
            AxiosController.post('login', dataSend).then(({data}) => {
                setUser(data.user)
                setToken(data.token)
            }).catch(error=>{
                const response = error.response;
                if(response && response.status == 422){
                    if(response.data.errors){
                        AlertErrorMs(true, 'error', response.data.errors)
                    }else{
                        
                    }
                }
            })
           
        }else{
            console.log('Sing up')
        };
    }
    const AlertErrorMs = (status, alertType, errors_message) => {
        if(status.status){
                setMessageStatus({alertType:alertType, textMessage: errors_message})
                setTimeout(() => {
                    setMessageStatus({ error: false, textMessage:'' });
                }, 8000);
            }
    }
    return(
        <div className=" overflow-x-hidden">
            <div className="login-wrapper w-screen bg-slate-600">
            <AlertContainer message={ message_status }/>
                <div className="background">
                    <div className="shape"></div>
                    <div className="shape"></div>
                </div>
                <div className={`guest-log-wrapper flex flex-row justify-between items-center overflow-x-hidden whitespace-nowrap absolute ${componetclassActive}`}>
                        <form className="rounded-tl-lg rounded-bl-lg shadow-lg" onSubmit={(e)=>handleSubmit(e, {login:true})}>
                                <h3 className=" font-bold text-3xl text-gray-400">Login</h3>
                                <label htmlFor="username" className=" font-thin text-gray-500">Username</label>
                                <input type="text" placeholder="Email or Phone" ref={ usernameRef } id="username" autoComplete="current-password" />
                                <label htmlFor="password" className=" font-thin text-gray-500">Password</label>
                                <input type="password" placeholder="Password" ref={ passwordRef } id="password" autoComplete="current-password"></input>
                                <em>{error.password}</em>
                                <div className=" flex flex-row justify-between items-center">
                                    {/* <Buttons buttontype={'slidebutton'} /> */}
                                    <button className=" rounded-full text-red-100 border border-gray-400 border-solid py-2 px-4 mx-2 shadow-lg hover:text-slate-400">Login</button>
                                </div>
                                <div className="form-swich-btn shadow-md hover:text-cyan-700">
                                    <FontAwesomeIcon icon={componetclassActive==""? faArrowAltCircleRight : faArrowAltCircleLeft} onClick={handleSwichcomp}/>
                                </div> 
                        </form>
                        <form className=" rounded-tr-lg rounded-br-lg shadow-lg inactive" onSubmit={(e)=>handleSubmit(e, {login:false})}>
                            <h3 className=" font-bold text-3xl text-gray-400">Join Membership</h3>
                            <label htmlFor="rusername" className=" font-thin text-gray-500">username</label>
                            <input type="text" placeholder="Email or Phone" id="rusername" ref={ rUsernameRef } autoComplete="current-password"/>
                            <label htmlFor="rpassword" className=" font-thin text-gray-500">password</label>
                            <input type="password" placeholder="Password" id="rpassword" autoComplete="current-password" ref={ rPasswordRef }/>
                            <input type="password" placeholder="Confirm password" id="rcpassword" autoComplete="current-password" ref={ rComfirmPasswordRef }/>
                            <div className=" flex flex-row justify-between items-center">
                                <button className="border border-gray-400 border-solid py-2 px-4 mx-2 shadow-lg rounded-lg text-slate-50 hover:text-slate-400">Joine</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    )
}


export default Login;