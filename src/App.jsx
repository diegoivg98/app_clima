import { useState } from "react";
import SearchForm from "./components/SearchForm";
import WeatherInfo from "./components/WeatherInfo";
import { getWeather } from "./services/api";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (location) => {
    try {
      const data = await getWeather(location);
      setWeather(data);
    } catch (error) {
      toast.error("Error al obtener el clima", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <WeatherInfo weather={weather} />
      <ToastContainer />
    </div>
  );
};

export default App;
