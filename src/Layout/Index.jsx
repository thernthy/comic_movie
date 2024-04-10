import React from "react";
import { Navigate, Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import '../App.css';
import { useEffect, useState } from 'react';
import '../css/error.css'
import { useStateContext } from "../Appcontrollers/ContextProvider"
import Oop from '../components/Oop';
import SearchCom from "../components/Search";
import useFetchComicData from '../Appcontrollers/ComicDataController';
import FilterByCom from "../components/Filterby";
import { Search } from "../components/Search/index";
import { useHookSearch } from "../hook/useSearch";

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
    const  {data, isLoading, error, setPage, pageCount, setSearch, search, refetch} = useHookSearch();
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);
    const [filterBy, setFilterBy] = useState(false)
    const [searchComponet, setSearchComponent] = useState(false)
    const [requestToken] = useState(process.env.REACT_APP_ACCESS_TOKEN);
    const [comicData, setComicData] = useState([]);
    const handleSearch = (searchValue) => {
        setFilterBy(false)
        setSearch(searchValue);
    };

    const  handlefilterBy = (ture, filterByValu) => {
        if(ture){
            setFilterBy(true)
        }else{
            setFilterBy(false)
        }
    }

    return(
        <div id='body-wrapper'>
            <header className='fixed top-0 left-0 w-screen  z-50'>
                <Navbar 
                    onMenuSwich={handleSearch}  
                    handlefilterBy={handlefilterBy} 
                    setSearch={setSearchComponent} 
                    token={token} 
                    user={user} 
                />
            </header>
            <main className={`body-wrapper max-h-screen bg-black pt-80 md:pt-48  py-3 md:px-12 lg:px-32`} style={{ scrollSnapType: 'x mandatory', overflowX: 'auto' }}>
                {
                oopStatus?
                <Oop message={oopMessage} />
                :searchComponet?
                <Search 
                    data={data} 
                    refetch={refetch} 
                    isLoading={isLoading} 
                    error={error}
                    setPage={setPage}
                    pageCount={pageCount}
                /> 
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