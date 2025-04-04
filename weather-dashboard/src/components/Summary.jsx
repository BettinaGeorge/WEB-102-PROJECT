export default function Summary({ data }) {
    if (!data || data.length === 0) {
      return <p>Loading summary...</p>;
    }
  
    const avgTemp = (
      data.reduce((sum, d) => sum + d.temp, 0) / data.length
    ).toFixed(1);
  
    const rainCities = data.filter(d =>
      d.weather.description.toLowerCase().includes('rain')
    ).length;
  
    const mostCommon = data.reduce((acc, d) => {
      const desc = d.weather.description;
      acc[desc] = (acc[desc] || 0) + 1;
      return acc;
    }, {});
    const mostCommonWeather = Object.entries(mostCommon).sort(
      (a, b) => b[1] - a[1]
    )[0][0];
  
    return (
      <div className="summary">
        <p>🌡️ Average Temp: {avgTemp}°C</p>
        <p>🌧️ Cities with Rain: {rainCities}</p>
        <p>☁️ Most Common Weather: {mostCommonWeather}</p>
      </div>
    );
  }
  