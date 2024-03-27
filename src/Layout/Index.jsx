import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../App.css';
import { useEffect, useState } from 'react';
import '../css/error.css'
import { useStateContext } from "../Appcontrollers/ContextProvider"
import fetchComicData from '../Appcontrollers/ComicDataController';
import Oop from '../components/Oop';
import SearchCom from "../components/Search";
import useFetchComicData from '../Appcontrollers/ComicDataController';



function Index() {
    const { fetchComicData, error } = useFetchComicData(); 
    const {user, token, setUser, setToken, oopStatus, oopMessage, setOopStatus, setOopMessage} = useStateContext();
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState(false)
    const [requestToken] = useState(process.env.REACT_APP_ACCESS_TOKEN);
    const [comicData, setComicData] = useState([]);

    const handleSearch = (searchValue) => {
        search?setLoading(true):setLoading(false)
        fetchComicData(requestToken, setLoading, setComicData, searchValue);
    };

    return(
        <div id='body-wrapper'>
            <header className='fixed top-0 left-0 w-screen  z-50'>
                <Navbar onMenuSwich={handleSearch} setSearch={setSearch} token={token} user={user} />
            </header>
            <main className={`body-wrapper pt-48 ${loading ? 'h-screen' : 'h-fit'} bg-slate-300`} style={{ scrollSnapType: 'x mandatory', overflowX: 'scroll' }}>
                {
                oopStatus?
                <Oop message={oopMessage} />
                :search?
                <SearchCom comicData={comicData} setSearch={setSearch} loding={loading} /> 
                :
                 <Outlet />
                }
                
            </main>
        </div>
    );
}


export default Index;