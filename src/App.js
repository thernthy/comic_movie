import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Bodycard from './components/Bodycard';
import { useEffect, useState } from 'react';
import './css/error.css'
import { useStateContext } from "./Appcontrollers/ContextProvider"
import AxiosController from "./Appcontrollers/Axioscontroller";
function App() {
  const {user, token, setUser, setToken} = useStateContext();
  const [selectedLink, setSelectedLink] = useState('/home');
  const [pageTitle, setPageTitle] = useState('모든 만화');
  const [pageActiveAnimation, setPageActiveAnimation] = useState('pageActive');
  const [comicData, setComicData] = useState([])
  const [requestToken] = useState('$2y$10$FmKpQpwCYgw1HT7AdW7yuuAS4oFJ35DwVDeu8Vfl.xLU2hPgsarS6');
  const handleMenuClick = (link, pageTitle) => {
    setSelectedLink(link);
    setPageTitle(pageTitle)
  };
  useEffect(() => {
    AxiosController.get(`/comic?token=${requestToken}&filter=all`)
      .then(response => {
        setComicData(response.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching comic data:', error);
      });
  }, [requestToken]);
  return (
    <div className="App">
        <header className='fixed top-0 left-0 w-screen  z-50'>
          <Navbar onMenuSwich={handleMenuClick} token={token} user={user} />
        </header>
        <div className='body-wrapper pt-48 bg-slate-300'>
          <Bodycard selectedLink={selectedLink} comicData={comicData} pageTile={pageTitle} doPageActiveAnime={pageActiveAnimation} onMenuSwich={handleMenuClick}/>
        </div>
    </div>
  );
}

export default App;
