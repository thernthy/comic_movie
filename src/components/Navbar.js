import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter, faLeaf, faArrowCircleLeft, faClose} from '@fortawesome/free-solid-svg-icons';
import { useHistory, useLocation, Link, useNavigate } from 'react-router-dom';
import Logout from "../Appcontrollers/Logout";
import Menus from '../data/Menu';

function Navbar({onMenuSwich, handlefilterBy, token, user, setSearch}) {

    
    const location = useLocation();
    const isDetailPage = location.pathname.includes('/detail');
    const currentPath = location.pathname;
    const [cancelButon, setCancelButton] = useState(false)
    const navigate = useNavigate();
    const [dragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [filterActive, setFilterActive] = useState(true);
    const [searBtnHandle, setSearBtnHandle] = useState('sh-btn-inactive');
    const [setActivFillter, setFilterActivClass] = useState('filterOut')
    const searchValue = useRef(null);
    const [filemenuActive, setFiltermenuActive] = useState('');
    useEffect(() => {
        const menueWrapper = document.querySelector('.menue_wrapper');
        if (menueWrapper) {
            menueWrapper.addEventListener('mousedown', handleMouseDown);
            menueWrapper.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            if (menueWrapper) {
                menueWrapper.removeEventListener('mousedown', handleMouseDown);
                menueWrapper.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            }
        };
    }, []);
    
    const searBtnHandleBnt = () => {
        if(searBtnHandle == 'sh-btn-inactive'){
           setSearBtnHandle('sh-btn-active')
        }else{
            setSearBtnHandle('sh-btn-inactive')
        }
    }
    const handleMouseDown = (e) => {
        setDragging(true);
        setStartX(e.pageX - document.querySelector('.menue_wrapper').offsetLeft);
    };

    const handleActivFilter = (e) => {
        if(!filterActive){
            setFilterActive(true)
            setFilterActivClass('fileterActive')
        }else{
            setFilterActive(false)
            setFilterActivClass('filterOut')
        }
    }
    const handleMouseMove = (e) => {
        if (!dragging) return;
        const x = e.pageX - document.querySelector('.menue_wrapper').offsetLeft;
        const walk = (x - startX) * 20; // Adjusting the scrolling speed
        document.querySelector('.menue_wrapper').scrollLeft -= walk;
    };

    const handleMouseUp = () => {
        setDragging(false);
    };
    //handle swich base menu 
    const handleSwichMenu = (menue_link) => {
        navigate(menue_link);
    }

    const handleBack = (e) => {
          e.preventDefault(); // Prevent default behavior of the event 
    }

    //make active when user click on fileter menu list for each item 
    const handleClickTarget = (filter) => {
        onMenuSwich(filter)
        handlefilterBy(filter);
         const filterMenuItems = document.querySelectorAll('.fiter-menu');
         const targetElement = filter.target;
         filterMenuItems.forEach(element => {
             if (element === targetElement) {
                 setFiltermenuActive('activeFilter');
                 element.classList.add('activeFilter');
             } else {
                 setFiltermenuActive('');
                 element.classList.remove('activeFilter');
             }
         });
    }

    //search input handle
    const handleSearch = () => {
        onMenuSwich(searchValue.current.value)
        if(searchValue.current.value!=''){
            setSearch(true)
            setCancelButton(true)
        }else{
            setCancelButton(false)
            setSearch(false)
        }
    }

    const handleCancelInput = () => {
        searchValue.current.value =''
        setCancelButton(false)
        setSearch(false)
    }

    return (
        <div className="menu-wrapper">
            <ul className="p-4 bg-slate-700 h-10 flex flex-row justify-end items-center">
                {!token?
                    <>
                        <li className="px-2"><Link to={'/login'}>Login</Link></li>
                        <li className="px-2"><Link to={'/login'}>Join Membership</Link></li>
                    </>
                    : ''
                }
                <li className="px-2"><Link to={'/catoon request'}>Catoon Request</Link></li>
                <li className="px-2"><Link to={'/snnouncements'}>Announcements</Link></li>

                {token? <li className="px-2 cursor-pointer" onClick={()=>Logout(token, user)}>Logout</li>:'' }
            </ul>
            <ul className="shadow-md py-2 bg-slate-300 flex flex-row justify-between items-center">
                <li>
                    <ul className="px-4 flex flex-row justify-between items-center">
                        {
                            Menus.menuList.map((Element,index) =>(
                                <li className={`
                                        cursor-pointer py-2 px-5 
                                        ${currentPath === Element.path? 'text-red-500': 
                                            ''
                                        }`
                                    } key={index} onClick={()=>handleSwichMenu(Element.path)}
                                >
                                    {Element.menu_name}
                                </li>
                            ))
                        }
                    </ul>
                </li>
                <li>
                    <ul className="flex flex-row items-center overflow-x-hidden">
                        <li className={`shearbutton bg-slate-600 mr-3 p-1 rounded-full z-10 ${searBtnHandle == 'sh-btn-inactive' ? 'sh-btn-inactive'  : 'sh-btn-active'}`}>
                            <input type="text" placeholder="Please enter comic title" onChange={(e)=> handleSearch() } ref={ searchValue } className={`bg-slate-200 h-max rounded-full pl-3 pr-10 py-1 outline-none`}/>
                        </li>
                        <li className="bg-slate-600 mr-3 p-2 rounded-full z-20">
                            {!cancelButon?
                                <button className=" h-6 w-6 flex flex-row items-center justify-center" onClick={searBtnHandleBnt}>
                                    <FontAwesomeIcon icon={faSearch}  className=" text-white font-bold text-2xl"/>
                                </button>
                                :
                                <button className=" h-6 w-6 flex flex-row items-center justify-center" onClick={handleCancelInput}>
                                    <FontAwesomeIcon icon={faClose}  className=" text-white font-bold text-2xl"/>
                                </button>
                            }
                        </li>
                    </ul>
                </li>
            </ul>
            <div className={`filter-wrapper flex flex-row justify-between items-center ${isDetailPage? '' :  'bg-slate-600 shadow-lg'} `}>
                    <div className={` filter-icon-wrapper w-14 h-14 flex justify-center items-center rounded-br-148 shadow-md bg-slate-300`}>
                        {isDetailPage?
                            <>
                                <FontAwesomeIcon icon={faArrowCircleLeft}  className=" mr-3 text-2xl text-slate-600" onClick={handleBack}/>
                            </>
                            :
                            ''
                        }
                    </div>
                <div className="flex flex-row justify-start items-center gap-2 w-11/12">
                    {!isDetailPage?
                        <ul className={`overflow-y-hidden px-6 filter-menue-wrapper overflow-x-auto flex flex-row gap-4  menue_wrapper ${setActivFillter == 'filterOut' ? 'filterOut': 'fileterActive'}`} onMouseMove={handleMouseMove} onMouseDown={handleMouseDown}>
                                {
                                    Menus.menuFilturList.map((element, index)=>(
                                        <li className="fiter-menu px-3 py-2 m-2 bg-slate-600 rounded-lg uppercase text-white whitespace-nowrap cursor-pointer"  
                                            onClick={()=>handleClickTarget(element.spaceficVanlu)} 
                                            key={index}>
                                            {element.filturName}
                                        </li>
                                    ))
                                }
                        </ul>
                    :''
                    }
                </div>
                {!isDetailPage?

                    <div className={` filter-icon-wrapper w-14 h-14 flex justify-center items-center rounded-bl-148 shadow-md bg-slate-300`}>
                        {/*<FontAwesomeIcon icon={faFilter} className=" mr-3 text-2xl text-slate-600" onClick={handleActivFilter}/>*/}
                    </div>
                 : ''
                }
            </div>
        </div>
    )
}

export default Navbar;