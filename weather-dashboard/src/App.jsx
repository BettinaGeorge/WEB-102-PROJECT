import React, { useState, useEffect } from 'react';
import { fetchWeatherForCity } from './api/weather';
import { cities } from './data/cities';
import Header from './components/Header';
import Summary from './components/Summary';
import SearchBar from './components/SearchBar';
import FilterDropdown from './components/FilterDropdown';
import WeatherList from './components/WeatherList';
import WeatherCard from './components/WeatherCard';
import './styles/App.css';

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [darkMode, setDarkMode] = useState(false);

  // 🧠 Apply/remove 'dark' class to <body> instead of div.App
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    async function loadWeatherData() {
      const results = await Promise.all(
        cities.map(city => fetchWeatherForCity(city))
      );
      const cleanedResults = results.filter(Boolean);
      setWeatherData(cleanedResults);
    }
    loadWeatherData();
  }, []);

  const filteredData = weatherData
    .filter(item =>
      item.city_name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(item =>
      filter === 'All' || item.weather.description === filter
    );

  return (
    <div className="App">
      <Header />
      <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
      <Summary data={weatherData} />
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <FilterDropdown value={filter} onChange={setFilter} data={weatherData} />
      <WeatherList data={filteredData} />
    </div>
  );
}

export default App;
