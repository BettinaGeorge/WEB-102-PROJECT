import { useState } from "react";
import "./App.css";
import DisplayCard from "./components/DisplayCard";
import BanList from "./components/BanList";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function App() {
  const [item, setItem] = useState(null);
  const [banList, setBanList] = useState([]);

  const fetchDog = async () => {
    try {
      const headers = {
        "x-api-key": import.meta.env.VITE_DOG_API_KEY,
      };

      let dog = null;

      while (!dog) {
        const res = await fetch("https://api.thedogapi.com/v1/images/search?has_breeds=true", { headers });
        const data = await res.json();

        if (!data || !data[0]?.breeds || data[0].breeds.length === 0) {
          await wait(300);
          continue;
        }

        const breed = data[0].breeds[0];
        const origin = breed.origin || "Unknown";

        if (!banList.includes(origin)) {
          dog = {
            name: breed.name,
            origin: origin,
            lifespan: breed.life_span,
            image: data[0].url,
          };
        } else {
          console.log(`Skipping banned origin: ${origin}`);
          await wait(200);
        }
      }

      setItem(dog);
    } catch (err) {
      console.error("Error fetching dog:", err);
    }
  };

  const handleBan = (origin) => {
    if (!banList.includes(origin)) {
      setBanList([...banList, origin]);
    }
  };

  const handleUnban = (origin) => {
    setBanList(banList.filter((item) => item !== origin));
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <h1 className="title">Veni Vici <span className="emoji">🐾</span></h1>
        <button className="discover-btn" onClick={fetchDog}>Discover!</button>
        {item && <DisplayCard item={item} handleBan={handleBan} />}
      </div>
      <BanList banList={banList} handleUnban={handleUnban} />
    </div>
  );
  
}

export default App;

