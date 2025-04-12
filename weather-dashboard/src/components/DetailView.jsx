import React from 'react';
import { useParams } from 'react-router-dom';
import { cities } from '../data/cities'; // Optional: if you want to verify valid cities
import { fetchWeatherForCity } from '../api/weather';

function DetailView() {
  const { city } = useParams();
  const decodedCity = decodeURIComponent(city);

  const [weatherDetails, setWeatherDetails] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const data = await fetchWeatherForCity(decodedCity);
      setWeatherDetails(data);
    }
    fetchData();
  }, [decodedCity]);

  if (!weatherDetails) return <p>Loading weather details...</p>;

  return (
    <div className="detail-view">
      <h2>🌤️ Weather Details for {decodedCity}</h2>
      <p><strong>Temperature:</strong> {weatherDetails.temp}°C</p>
      <p><strong>Feels Like:</strong> {weatherDetails.app_temp}°C</p>
      <p><strong>Humidity:</strong> {weatherDetails.rh}%</p>
      <p><strong>Wind Speed:</strong> {weatherDetails.wind_spd} m/s</p>
      <p><strong>Weather:</strong> {weatherDetails.weather.description}</p>
    </div>
  );
}

export default DetailView;
