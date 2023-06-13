import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
export const getWeather = async (location) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener el clima");
  }
};
