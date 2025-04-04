import WeatherCard from './WeatherCard';

export default function WeatherList({ data }) {
  return (
    <div className="weather-list">
      {data.map(item => (
        <WeatherCard key={item.city_name} cityData={item} />
      ))}
    </div>
  );
}
