const WeatherInfo = ({ weather }) => {
  
  const WeatherTypes = [
    {
      type: "Clear",
      img: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
    },
    {
      type: "Rain",
      img: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
    },
    {
      type: "Snow",
      img: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    },
    {
      type: "Clouds",
      img: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
    },
    {
      type: "Haze",
      img: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
    },
    {
      type: "Smoke",
      img: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
    },
    {
      type: "Mist",
      img: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
    },
    {
      type: "Drizzle",
      img: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
    },
  ];

  const getWeatherImage = (weatherType) => {
    const foundType = WeatherTypes.find((type) => type.type === weatherType);
    return foundType ? foundType.img : "";
  };

  return (
    <div className="max-w-sm mx-auto mt-10">
      {weather && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold flex justify-center">{weather.name}</h2>
          <div className="mt-3">
            <p>
              <span className="font-bold">Temperatura:</span>{" "}
              {/* Convertir Kelvin a Celsius */}
              {Math.round(weather.main.temp) - 273}°C
            </p>
            <p>
              <span className="font-bold">Humedad:</span>{" "}
              {weather.main.humidity}%
            </p>
            <p>
              <span className="font-bold">Viento:</span>{" "}
              {weather.wind.speed} km/h
            </p>
            {weather.weather[0].main && (
              <img
                src={getWeatherImage(weather.weather[0].main)}
                alt={weather.weather[0].main}
                className="mt-4"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
