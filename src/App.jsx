import { useState } from "react";
import SearchForm from "./components/SearchForm";
import WeatherInfo from "./components/WeatherInfo";
import { getWeather } from "./services/api";
import "./App.css";

const App = () => {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (location) => {
    try {
      const data = await getWeather(location);
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <WeatherInfo weather={weather} />
    </div>
  );
};

export default App;
