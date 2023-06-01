// using Rapid API to fetch data from youtube 
const axios = require('axios');
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
        part: 'snippet',
        videoId: 'M7FIvfx5J10',
        maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key': '8e04b9667amsh2f380b28cf30ac2p123db6jsn07ba48a5105a',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}