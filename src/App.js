// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// import Bodycard from './components/Bodycard';
// import { useEffect, useState } from 'react';
// import './css/error.css'
// import Home from "./pages/Home";
// import { useHookComic } from './hook/useHookComic';
// function App() {
//   const { data, isLoading, error, setPage, pageCount, refetch } = useHookComic();
//   return (
//     <div className={`body-wrapper ${isLoading ? 'h-screen' : 'h-fit'} bg-slate-300`}>
//             {
//               isLoading?
//               (<div className='loding-wrapper fixed top-2/4 left-2/4 -translate-x-2/4 translate-y-2/4'> 
//                 <span className="loader"></span> 
//               </div>
//               )
//               :
//               <Home  data={data} setPage={setPage} pageCount={pageCount} />
//            }
//     </div>
//   );
// }

// export default App;
