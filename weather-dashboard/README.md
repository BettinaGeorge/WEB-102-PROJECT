# Web Development Project 5 - Weather Dashboard 🌤️

Submitted by: **Bettina George**

This web app: **Displays live weather data for a list of cities using the WeatherBit API. The dashboard includes a searchable and filterable list of weather cards, a summary of weather statistics, and a toggle between dark and light mode for accessibility and user preference.**

Time spent: **4 hours** spent in total

---

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard displays at least 10 unique cities, one per row
  - Each weather card includes temperature and weather description
- [x] **`useEffect` React hook and `async`/`await` are used**
- [x] **The app dashboard includes at least three summary statistics about the data** 
  - 🌡️ Average temperature across all cities
  - 🌧️ Number of cities currently experiencing rain
  - ☁️ Most common weather condition
- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar filters weather cards by city name
  - The list updates dynamically as the user types
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - Users can filter cities by weather condition (e.g., Cloudy, Rain, Clear)
  - The dashboard list updates in real-time as filters are adjusted

---

## Optional Features

The following **optional** features are implemented:

- [x] Dark Mode toggle (🌙 / ☀️)
- [x] Responsive layout using CSS Grid
- [x] Weather icons change dynamically based on weather condition

---

## Additional Features

* [x] WeatherCard hover effect using CSS transitions
* [x] Centralized layout with clean modern design
* [x] Styled input fields and buttons with CSS variables
* [x] Graceful fallback message during data loading

---

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://imgur.com/a/yB5DAiXgif' title='Video Walkthrough' width='100%' alt='Video Walkthrough' />


GIF created with **Loom and Imgur**

---

## Notes

**Challenges:**
- Understanding how to use `async/await` properly inside `useEffect`
- Debugging issues related to asynchronous data not being available immediately
- Styling and theme switching using CSS variables

**Wins:**
- Learned how to structure a React project with reusable components
- Successfully implemented a fully responsive and themed dashboard with real-time API data

---

## License

    Copyright 2024 Bettina George

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
