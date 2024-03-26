import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Bodycard from './components/Bodycard';
import { useEffect, useState } from 'react';
import './css/error.css'
import Home from "./wigget/Home";
import { useStateContext } from "./Appcontrollers/ContextProvider"
import AxiosController from "./Appcontrollers/Axioscontroller";
import fetchComicData from './Appcontrollers/ComicDataController';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';
function App() {
  const {user, token, setUser, setToken} = useStateContext();
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [selectedLink, setSelectedLink] = useState('/home');
  const [pageTitle, setPageTitle] = useState('모든 만화');
  const [pageActiveAnimation, setPageActiveAnimation] = useState('pageActive');
  const handleMenuClick = (link, pageTitle) => {
    setSelectedLink(link);
    setPageTitle(pageTitle)
  };
  const [requestToken] = useState('$2y$10$FmKpQpwCYgw1HT7AdW7yuuAS4oFJ35DwVDeu8Vfl.xLU2hPgsarS6');
  const [comicData, setComicData] = useState([]);
  useEffect(() => {
      fetchComicData(requestToken, setLoading, setComicData, filter);
  }, [requestToken]); 
  return (
    <div className="App">
      <Home  comicData={comicData} />
        {/* <header className='fixed top-0 left-0 w-screen  z-50'>
          <Navbar onMenuSwich={handleMenuClick} token={token} user={user} />
        </header>
        <main className={`body-wrapper pt-48 ${loading ? 'h-screen' : 'h-fit'} bg-slate-300`} style={{ scrollSnapType: 'x mandatory', overflowX: 'scroll' }}>
          <Outlet/>
          {loading?<div className='loding-wrapper fixed top-2/4 left-2/4 -translate-x-2/4 translate-y-2/4'> <span className="loader"></span> </div>:
            <Bodycard selectedLink={selectedLink} comicData={comicData} pageTile={pageTitle} doPageActiveAnime={pageActiveAnimation} onMenuSwich={handleMenuClick}/>
          } 
        </main> */}
    </div>
  );
}

export default App;
