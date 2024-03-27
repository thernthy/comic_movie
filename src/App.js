import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Bodycard from './components/Bodycard';
import { useEffect, useState } from 'react';
import './css/error.css'
import Home from "./pages/Home";
import { useStateContext } from "./Appcontrollers/ContextProvider"
import useFetchComicData from './Appcontrollers/ComicDataController';
function App() {
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [requestToken] = useState('$2y$10$FmKpQpwCYgw1HT7AdW7yuuAS4oFJ35DwVDeu8Vfl.xLU2hPgsarS6');
  const [comicData, setComicData] = useState([]);

  // Call useFetchComicData directly within the component
  const { fetchComicData, error } = useFetchComicData(); 
  useEffect(() => {
    // Call the fetchComicData function provided by the custom hook
    fetchComicData(requestToken, setLoading,  setComicData, 'filter', filter);
  }, [requestToken]);


  return (
    <div className={`body-wrapper ${loading ? 'h-screen' : 'h-fit'} bg-slate-300`}>
            {
              loading?
              (<div className='loding-wrapper fixed top-2/4 left-2/4 -translate-x-2/4 translate-y-2/4'> 
                <span className="loader"></span> 
              </div>
              )
              :
              <Home  comicData={comicData} />
           }
    </div>
  );
}

export default App;
