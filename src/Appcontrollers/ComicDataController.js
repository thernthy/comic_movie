import React from "react";
import { useState } from 'react';
import { useStateContext } from "../Appcontrollers/ContextProvider";
const baseURL = process.env.REACT_APP_API_BASE_URL;
const useFetchComicData = () => {
  const { setOopMessage, setOopStatus } = useStateContext();
  const [error, setError] = useState(null);
  const fetchComicData = async (requestToken, setLoading, setComicData, requstype, valueofRequest) => {
    const url = `${baseURL}/api/comic?token=${requestToken}&${requstype}=${valueofRequest}`;
    console.log(url)
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if(data != ''){
        setComicData(data);
      }else{
        setError('Data not found!')
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setOopStatus(true);
      setOopMessage('Something wrong with our server!');
    }
  };
  return { fetchComicData, error }; 
};

export default useFetchComicData;

