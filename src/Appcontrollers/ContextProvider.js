import {createContext, useContext, useState} from "react";

const StateContext = createContext({
  currentUser: null,
  token: null,
  oopStatus:false,
  oopMessage:null,
  notification: null,
  comicData:[],
  setUser: () => {},
  setToken: () => {},
  setNotification: () => {},
  setOopStatus: () => {},
  setOopMessage: () => {},
  setComicData: () => {},
})

export const ContextProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [comicData, _setComicData] = useState([])
  const [oopStatus, _setoopSatus] = useState(false)
  const [oopMessage, _setOopMessage] = useState(null)
  const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
  const [notification, _setNotification] = useState('');
  const setToken = (token) => {
    _setToken(token)
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  }

  const setNotification = message => {
    _setNotification(message);
    setTimeout(() => {
      _setNotification('')
    }, 5000)
  }

  //set oop status funcotn 
  const setOopStatus = (oopStatus) => {
    _setoopSatus(oopStatus);
  }

  const setOopMessage = (message) => {
    _setOopMessage(message)
  }
  //set new Comic data 
  const setComicData = (data) => {
      _setComicData(data)
  }

  return (
    <StateContext.Provider value={{
      user,
      setUser,
      token,
      setToken,
      notification,
      setNotification,
      oopStatus,
      oopMessage,
      setOopMessage,
      setOopStatus,
      comicData,
      setComicData,
    }}>
      {children}
    </StateContext.Provider>
  );
}
export const useStateContext = () => useContext(StateContext);
