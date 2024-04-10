import React, { useRef, useState } from "react";
import '../css/login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import AlertContainer from "../components/Error";
import { useStateContext }  from '../Appcontrollers/ContextProvider';
import { AuthAxiosApi } from "../Appcontrollers/comicXciosClient";
import { data } from "autoprefixer";

function Login () {
    const {setUser, setToken} = useStateContext();
    const [componetclassActive, setCompentActiveClass] = useState('')
    const [loding, setLoading] = useState(false)

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
        } else if (!login.login && data[0].password != data[0].confirm_password) {
            AlertErrorMs({ status: true }, 'warning', 'Confirm password does not match!');
        } else {
            handleSubmitSend(login, data);
        }
    }
    const handleSubmitSend = async (loding, userData) => {
       if(loding.login){
            AuthAxiosApi.get(`/app_login?t=base64:8LiE4ybINYX2HjOzL9j9QhW8vM0+ejOkBaxUNBmyxRk=&email=${userData[0].username}&password=${userData[0].password}`,{
                headers:{
                    'X-API-Key' : process.env.REACT_APP_API_KEY
                }
            }).then(({data}) => {
                console.log(data)
                AlertErrorMs({ status: true }, 'success', 'Access successfull')
                setTimeout(() => {
                    setUser(data.user)
                    setToken(data.token)
                }, 100)
            }).catch(error=>{
                const response = error.response;
                if(response && response.status == 422){
                    if(response.data.errors){
                            const errors = response.data.errors
                            AlertErrorMs({ status: true }, 'warning', Object.keys(errors).map(key=>(errors[key][0])))
                    }else{
                        AlertErrorMs({ status: true }, 'error', response.data.message)
                    }
                }else if(response && response.status == 401){
                    AlertErrorMs({ status: true }, 'error', response.data.message)
                }else{
                    AlertErrorMs({ status: true }, 'error', response.data.message)
                }
            })
        }
        if(!loding.login){
            try {
                const response  =  await AuthAxiosApi.get(`/app_singup?name=${userData[0].username}
                        &email=${userData[0].username}
                        &password=${userData[0].password}
                        &password_confirmation=${userData[0].confirm_password}`,{
                            headers:{
                                    'X-API-Key' : process.env.REACT_APP_API_KEY
                                }
                        })
                    if(response.data.token && response.data.user){
                        AlertErrorMs({ status: true }, 'success', 'Access successfull')
                        setTimeout(() => {
                            setUser(response.data.user)
                            setToken(response.data.token)
                        }, 100)
                    }

                } catch (error) {
                    const response = error.response;
                    if(response && response.status == 422){
                        if(response.data.errors){
                            const errors = response.data.errors
                            AlertErrorMs({ status: true }, 'warning', Object.keys(errors).map(key=>(errors[key][0])))
                        }else{
                            AlertErrorMs({ status: true }, 'error', response.data.message)
                        }
                    }else if(response && response.status == 401){
                        AlertErrorMs({ status: true }, 'error', response.data.message)
                    }
                    else{
                        AlertErrorMs({ status: true }, 'error', response.data.message)
                    }
                }
        }
        
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