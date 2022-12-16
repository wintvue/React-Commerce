import axios from 'axios';


const API_URL = 'https://www.googleapis.com/youtube/v3'

const options = {
    method: 'GET',
    params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        maxResults: '50',
    },
  };
  
export const fetchSearchAPI = async (url) => {
    const {data} = await axios.get(`${API_URL}/${url}`, options)
    return data;
}