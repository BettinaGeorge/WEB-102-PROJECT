export default function WeatherCard({ cityData }) {
    const getIcon = (desc) => {
      const lower = desc.toLowerCase();
      if (lower.includes("clear")) return "☀️";
      if (lower.includes("cloud")) return "☁️";
      if (lower.includes("rain")) return "🌧️";
      if (lower.includes("snow")) return "❄️";
      return "🌡️";
    };
  
    return (
      <div className="card">
        <div className="weather-icon">{getIcon(cityData.weather.description)}</div>
        <h3>{cityData.city_name}</h3>
        <p>{cityData.weather.description}</p>
        <p>Temp: {cityData.temp}°C</p>
        <p>Wind: {cityData.wind_spd} m/s</p>
      </div>
    );
  }
  