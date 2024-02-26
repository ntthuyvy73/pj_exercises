import axios from "axios";

const URL = 'https://exercisedb.p.rapidapi.com/';

export const options = {
  method: "GET",
  params: { limit: "10" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  const {data} = await axios.request(URL+url, options);
  return data;
};
