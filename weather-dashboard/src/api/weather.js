import axios from 'axios';

const API_KEY = '1110f6a95411474a843c1358135afbfd';

export const fetchWeatherForCity = async (city) => {
  const res = await axios.get(
    `https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}`
  );
  return res.data.data[0];
};
