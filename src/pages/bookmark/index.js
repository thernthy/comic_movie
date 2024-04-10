import React, { useEffect, useState } from "react";
import { useStateContext } from "../../Appcontrollers/ContextProvider";
import { GetComicAxios } from "../../Appcontrollers/comicXciosClient";
import { RenderBookMark } from "../../components/renderBookmark";
import { useNavigate } from 'react-router-dom'

export const Bookmakr = () =>{
    const navigate = useNavigate()
    const {
        user, 
        token, 
    } = useStateContext();
    const [bookMakrData, setBookMarkData] = useState([]);
    const currentUser =  user?JSON.parse(user):null;

    useEffect(()=> {
        if(!user){
            navigate('/')
        }
        geBoomMar("get_book_mark", currentUser?.id)
    },[user])

    const geBoomMar  = async (action, person_id) => {
        try{
            const response = await GetComicAxios.get(`comic/bookmark?${action}=true&pi=${person_id}`, {
                headers:{
                    'X-API-Key' : process.env.REACT_APP_API_KEY
                }
            })
            if(response && response.status === 200){
                if(response.data.data){
                    setBookMarkData(response.data.data)
                }
            }
        }catch(error){
            const response  = error.response
            if(response && response.status == 401){
                alert(response.data.message)
            }
        }
    }

    if(bookMakrData.length >= 1){
        return (
            <RenderBookMark 
                data={bookMakrData}
            />
        )
    }else{
        return
        (
            <h1>Not Found book mark!</h1>
        )
    }
    
}