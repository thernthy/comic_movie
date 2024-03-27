// import React, { useEffect, useState } from "react";
// import cardItemIformation from '../data/Carddata';
// import Home from "../pages/Home";
// import DetialPage from "../wigget/Detailpage";
// import Login from "../pages/Login";
// function Bodycard({ selectedLink, pageTile, onMenuSwich, comicData, doPageActiveAnime}) {
//     const [comicTitle, setComicTitle] = useState('')
//     const [loding, setLoading] = useState(false);
//     useEffect(()=>{
//         const comicItems = document.querySelectorAll('.comic_item_card');
//         comicItems.forEach(item => {
//                 item.addEventListener('mouseenter', () => {
//                     comicItems.forEach(otherItem => {
//                     if (otherItem !== item) {
//                         otherItem.style.filter= 'blur(1px)';
//                     }
//                     });
//                 });
//                 item.addEventListener('mouseleave', () => {
//                     comicItems.forEach(otherItem => {
//                     otherItem.style.filter= 'blur(0)';
//                     });
//                 });
//             });
//     }, [])
//     const handleComicview = (path, comic_name) => {
//         setComicTitle(comic_name);
//         onMenuSwich(path+comic_name, '디테일')
//     }
    
//     return(
//         <div className=" px-12">
//             <h2 className=" text-gray-600 font-bold text-center text-3xl pb-7">{pageTile}</h2>
//             {
//                 ((selectedLink=== '/home' && <Home  viewDetail={handleComicview} comicData={comicData} doPageActiveAnime={doPageActiveAnime} />)
//                 // (selectedLink=== '/filtur' && <Home  viewDetail={handleComicview}  doPageActiveAnime={doPageActiveAnime}/>)||
//                 // (selectedLink === `viewdetail/${comicTitle}` && <DetialPage comicData={comicData} comicTitle={comicTitle} doPageActiveAnime={doPageActiveAnime} />))
//                 )
//             }
//         </div>
//     )
// }

// export default Bodycard;