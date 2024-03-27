import React from "react";
import { useState } from 'react';
import { useStateContext } from "../Appcontrollers/ContextProvider";
const baseURL = process.env.REACT_APP_API_BASE_URL;
const useFetchComicData = () => {
  const { setOopMessage, setOopStatus } = useStateContext();
  const [error, setError] = useState(null);
  const fetchComicData = async (requestToken, setLoading, setComicData, filter) => {
    const url = `${baseURL}/api/comic?token=${requestToken}&filter=${filter}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setComicData(data);
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

