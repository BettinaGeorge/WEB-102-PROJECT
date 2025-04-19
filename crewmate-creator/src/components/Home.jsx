import crewImage from '../assets/crewmates.png'
import './Home.css'

export default function Home() {
  return (
    <main className="home-page">
      <h1>Welcome to the Crewmate Creator!</h1>
      <p>Here is where you can create your very own set of crewmates before sending them off into space!</p>
      <img src={crewImage} alt="Group of crewmates" className="crew-image" />
    </main>
  )
}
