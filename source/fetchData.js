import axios from "axios";

const api_key = "7e2a7222422bb8d12e30add4b14504dd";

export const fetchWeatherData = async (city) => {
  const response = await axios.post(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
  );
  return response;
};
