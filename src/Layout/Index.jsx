import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../App.css';
import { useEffect, useState } from 'react';
import '../css/error.css'
import { useStateContext } from "../Appcontrollers/ContextProvider"
import Oop from '../components/Oop';
import SearchCom from "../components/Search";
import useFetchComicData from '../Appcontrollers/ComicDataController';
import FilterByCom from "../components/Filterby";

function Index() {
    const {
        user, 
        token, 
        setUser, 
        setToken,
        oopStatus, 
        oopMessage,
        setOopStatus, 
        setOopMessage
    } = useStateContext();
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);
    const [filterBy, setFilterBy] = useState(false)
    const [search, setSearch] = useState(false)
    const [requestToken] = useState(process.env.REACT_APP_ACCESS_TOKEN);
    const [comicData, setComicData] = useState([]);
    //get fetchComic Data funtion from useFetchComicData to make API request 
    //const { fetchComicData, error } = useFetchComicData(); 
    //hook search typing 
    const handleSearch = (searchValue) => {
        setFilterBy(false)
        setLoading(true)
       // fetchComicData(requestToken, setLoading, setComicData, 'search', searchValue);
    };

    const  handlefilterBy = (ture, filterByValu) => {
        if(ture){
            setFilterBy(true)
            setLoading(true)
            //fetchComicData(requestToken, setLoading, setComicData, 'filterBy', filterByValu);
        }else{
            setFilterBy(false)
        }
    }

    return(
        <div id='body-wrapper'>
            <header className='fixed top-0 left-0 w-screen  z-50'>
                <Navbar onMenuSwich={handleSearch}  handlefilterBy={handlefilterBy} setSearch={setSearch} token={token} user={user} />
            </header>
            <main className={`body-wrapper max-h-screen bg-slate-300 pt-48`} style={{ scrollSnapType: 'x mandatory', overflowX: 'auto' }}>
                {
                oopStatus?
                <Oop message={oopMessage} />
                :search?
                <SearchCom comicData={comicData} setSearch={setSearch} loding={loading} /> 
                :filterBy?
                <FilterByCom comicData={comicData} setSearch={setSearch} loding={loading}/>
                :
                 <Outlet />
                }
                
            </main>
        </div>
    );
}


export default Index;