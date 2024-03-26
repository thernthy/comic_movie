import React from "react";
import App from "../App";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../App.css';
import Bodycard from '../components/Bodycard';
import { useEffect, useState } from 'react';
import '../css/error.css'
import { useStateContext } from "../Appcontrollers/ContextProvider"
import AxiosController from "../Appcontrollers/Axioscontroller";
import fetchComicData from '../Appcontrollers/ComicDataController';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import Home from "../wigget/Home";
import SearchCom from "../components/Search";
function Index() {
    const {user, token, setUser, setToken} = useStateContext();
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
                {search?<SearchCom comicData={comicData} setSearch={setSearch} loding={loading} />:
                 <Outlet />
                }
            </main>
        </div>
    );
}


export default Index;