import { Link } from 'react-router-dom';
import WeatherCard from './WeatherCard';

export default function WeatherList({ data }) {
  return (
    <div className="weather-list">
      {data.map(item => (
        <Link 
          to={`/details/${encodeURIComponent(item.city_name)}`} 
          key={item.city_name} 
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <WeatherCard cityData={item} />
        </Link>
      ))}
    </div>
  );
}
