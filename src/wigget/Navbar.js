import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter, faLeaf} from '@fortawesome/free-solid-svg-icons';
function Navbar() {
    const [dragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [filterActive, setFilterActive] = useState(false);
    const [searBtnHandle, setSearBtnHandle] = useState('sh-btn-inactive');
    const [setActivFillter, setFilterActivClass] = useState('filterOut')
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



    return (
        <div className="menu-wrapper">
            <ul className="p-4 bg-slate-700 h-10 flex flex-row justify-end items-center">
                <li className="px-2"><a href="" className="text-white">Login</a></li>
                <li className="px-2"><a href="" className="text-white">Join Membership</a></li>
                <li className="px-2"><a href="" className="text-white">Catoon Request</a></li>
                <li className="px-2"><a href="" className="text-white">Announcements</a></li>
                <li className="px-2"><a href="" className="text-white">Logout</a></li>
            </ul>
            <ul className="shadow-md py-5 bg-slate-300 flex flex-row justify-between items-center">
                <li>
                    <ul className="px-4 flex flex-row justify-between items-center">
                        <li className="py-2 px-5"><a href=""  className="font-bold text-slate-600">Home</a></li>
                        <li className="py-2 px-5"><a href=""  className="font-bold text-slate-600">Movies</a></li>
                        <li className="py-2 px-5"><a href=""  className="font-bold text-slate-600">Category</a></li>
                        <li className="py-2 px-5"><a href=""  className="font-bold text-slate-600">User</a></li>
                        <li className="py-2 px-5"><a href=""  className="font-bold text-slate-600">Home</a></li>
                        <li className="py-2 px-5"><a href=""  className="font-bold text-slate-600">Home</a></li>
                        <li className="py-2 px-5"><a href=""  className="font-bold text-slate-600">Home</a></li>
                    </ul>
                </li>
                <li>
                    <ul className="flex flex-row items-center overflow-x-hidden">
                        <li className={`shearbutton bg-slate-600 mr-3 p-1 rounded-full z-10 ${searBtnHandle == 'sh-btn-inactive' ? 'sh-btn-inactive'  : 'sh-btn-active'}`}>
                            <input type="text" placeholder="Please enter comic title"  className={`bg-slate-200 h-max rounded-full pl-3 pr-10 py-1 outline-none`}/>
                        </li>
                        <li className="bg-slate-600 mr-3 p-2 rounded-full z-20">
                            <button className=" h-6 w-6 flex flex-row items-center justify-center" onClick={searBtnHandleBnt}>
                                <FontAwesomeIcon icon={faSearch}  className=" text-white font-bold text-2xl"/>
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className={`filter-wrapper flex flex-row justify-start items-center ${filterActive ? 'bg-slate-600 animation' : ''}`}>
                <div className={` filter-icon-wrapper w-14 h-14 flex justify-center items-center rounded-br-148 shadow-md ${filterActive ? ' bg-white':'bg-slate-300'}`}>
                    <FontAwesomeIcon icon={faFilter} className=" mr-3 text-2xl text-slate-600" onClick={handleActivFilter}/>
                </div>
                <div className="flex flex-row justify-start items-center gap-2 w-11/12">
                    <ul className={`px-6 filter-menue-wrapper overflow-x-auto flex flex-row gap-4  menue_wrapper ${setActivFillter == 'filterOut' ? 'filterOut': 'fileterActive'}`} onMouseMove={handleMouseMove} onMouseDown={handleMouseDown}>
                            <li className="px-3 py-2 m-2 bg-slate-600 rounded-lg"><a href="" className="uppercase text-white whitespace-nowrap">filter 1</a></li>
                            <li className="px-3 py-2 m-2 bg-slate-600 rounded-lg"><a href="" className="uppercase text-white whitespace-nowrap">filter 1</a></li>
                            <li className="px-3 py-2 m-2 bg-slate-600 rounded-lg"><a href="" className="uppercase text-white whitespace-nowrap">filter 2</a></li>
                            <li className="px-3 py-2 m-2 bg-slate-600 rounded-lg"><a href="" className="uppercase text-white whitespace-nowrap">filter 3</a></li>
                            <li className="px-3 py-2 m-2 bg-slate-600 rounded-lg"><a href="" className="uppercase text-white whitespace-nowrap">filter 4</a></li>
                            <li className="px-3 py-2 m-2 bg-slate-600 rounded-lg"><a href="" className="uppercase text-white whitespace-nowrap">filter 5</a></li>
                            <li className="px-3 py-2 m-2 bg-slate-600 rounded-lg"><a href="" className="uppercase text-white whitespace-nowrap">filter 5</a></li>
                            <li className="px-3 py-2 m-2 bg-slate-600 rounded-lg"><a href="" className="uppercase text-white whitespace-nowrap">filter 5</a></li>
                            <li className="px-3 py-2 m-2 bg-slate-600 rounded-lg"><a href="" className="uppercase text-white whitespace-nowrap">filter 5</a></li>
                            <li className="px-3 py-2 m-2 bg-slate-600 rounded-lg"><a href="" className="uppercase text-white whitespace-nowrap">filter 5</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;