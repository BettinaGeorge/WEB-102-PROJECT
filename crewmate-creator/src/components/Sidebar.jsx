import { NavLink } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/create">Create a Crewmate!</NavLink></li>
          <li><NavLink to="/gallery">Crewmate Gallery</NavLink></li>
        </ul>
      </nav>
      <div className="bottom-logo">
        <img src="/helmet.png" alt="Helmet icon" />
      </div>
    </aside>
  )
}
