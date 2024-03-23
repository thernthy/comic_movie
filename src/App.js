import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Bodycard from './components/Bodycard';
import { useState } from 'react';
import './css/error.css'
function App() {
  const [selectedLink, setSelectedLink] = useState('/home');
  const [pageTitle, setPageTitle] = useState('모든 만화');
  const [pageActiveAnimation, setPageActiveAnimation] = useState('pageActive');
  const handleMenuClick = (link, pageTitle) => {
    setSelectedLink(link);
    setPageTitle(pageTitle)
  };
  return (
    <div className="App">
        <header className='fixed top-0 left-0 w-screen  z-50'>
          <Navbar onMenuSwich={handleMenuClick} />
        </header>
        <div className='body-wrapper pt-48 bg-slate-300'>
          <Bodycard selectedLink={selectedLink} pageTile={pageTitle} doPageActiveAnime={pageActiveAnimation} onMenuSwich={handleMenuClick}/>
        </div>
    </div>
  );
}

export default App;
