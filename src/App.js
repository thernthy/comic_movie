import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Bodycard from './components/Bodycard';
import { useEffect, useState } from 'react';
import './css/error.css'
import Home from "./wigget/Home";
import { useStateContext } from "./Appcontrollers/ContextProvider"
import fetchComicData from './Appcontrollers/ComicDataController';
function App() {
  const {user, token, setUser, setToken} = useStateContext();
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [requestToken] = useState('$2y$10$FmKpQpwCYgw1HT7AdW7yuuAS4oFJ35DwVDeu8Vfl.xLU2hPgsarS6');
  const [comicData, setComicData] = useState([]);
  useEffect(() => {
      fetchComicData(requestToken, setLoading, setComicData, filter);
  }, [requestToken]); 
  return (
    <div className={`body-wrapper ${loading ? 'h-screen' : 'h-fit'} bg-slate-300`}>
            {
              loading?<div className='loding-wrapper fixed top-2/4 left-2/4 -translate-x-2/4 translate-y-2/4'> <span className="loader"></span> </div>:
              <Home  comicData={comicData} />
           } 
    </div>
  );
}

export default App;
