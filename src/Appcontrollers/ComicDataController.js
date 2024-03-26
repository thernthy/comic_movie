import React from "react";
import  Oop from "../component/Oop";
const baseURL = process.env.REACT_APP_API_BASE_URL;
const fetchComicData = async (requestToken, setLoading, setComicData, filter) => {
    const url = `${baseURL}/api/comic?token=${requestToken}&filter=${filter}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setComicData(data);
        setLoading(false)
    } catch (error) {
       console.log(error)
       <Oop message={error} />
    }
};

export default fetchComicData;
