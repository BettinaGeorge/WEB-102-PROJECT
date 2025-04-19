import { useEffect, useState } from 'react'
import { supabase } from '../supabase'
import { Link } from 'react-router-dom'
import ColorChart from './Colorchart'
import './Gallery.css'

export default function Gallery() {
  const [crewmates, setCrewmates] = useState([])
  const [filteredCrew, setFilteredCrew] = useState([])
  const [filterColor, setFilterColor] = useState('All')
  const [avgSpeed, setAvgSpeed] = useState(0)
  const [successLevel, setSuccessLevel] = useState('')

  // 🧠 Fetch from Supabase
  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching crewmates:', error)
      } else {
        setCrewmates(data)
      }
    }

    fetchCrewmates()
  }, [])

  // 🎯 Handle filtering and stats
  useEffect(() => {
    if (filterColor === 'All') {
      setFilteredCrew(crewmates)
    } else {
      setFilteredCrew(crewmates.filter(c => c.color === filterColor))
    }

    if (crewmates.length > 0) {
      const totalSpeed = crewmates.reduce((acc, c) => acc + c.speed, 0)
      const avg = (totalSpeed / crewmates.length).toFixed(2)
      setAvgSpeed(avg)

      const colorCounts = crewmates.reduce((acc, c) => {
        acc[c.color] = (acc[c.color] || 0) + 1
        return acc
      }, {})

      const diversity = Object.keys(colorCounts).length

      if (diversity >= 6 && avg > 10) {
        setSuccessLevel('⭐ Elite crew — colorful and fast!')
      } else if (avg > 10) {
        setSuccessLevel('⚡ Speedy but could use some color variety')
      } else {
        setSuccessLevel('💤 Your crew is... chill')
      }
    }
  }, [crewmates, filterColor])

  return (
    <main className="gallery-page">
      <h1 className="gallery-title">Your Crewmate Gallery!</h1>

      {/* Filter dropdown */}
      <div className="filter-bar">
        <label htmlFor="filter">Filter by color:</label>
        <select onChange={(e) => setFilterColor(e.target.value)} value={filterColor}>
          <option value="All">All</option>
          {['Red', 'Pink', 'Purple', 'Green', 'Yellow', 'Blue', 'Orange', 'Rainbow'].map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>

      {/* Stats */}
      <div className="stats-bar">
        <p><strong>Average Speed:</strong> {avgSpeed} mph</p>
        <p><strong>Success Meter:</strong> {successLevel}</p>
      </div>

      {/* Chart */}
      <ColorChart crewmates={filteredCrew} />

      {/* Crewmate Cards */}
      <div className="gallery-grid">
        {filteredCrew.length === 0 ? (
          <p className="empty-message">No crewmates found! Try creating one.</p>
        ) : (
          filteredCrew.map((c) => (
            <div className={`crewmate-card color-${c.color.toLowerCase()}`} key={c.id}>
              <h2>Name of Crewmate: <span>{c.name}</span></h2>
              <p>Speed of Crewmate: <span>{c.speed} mph</span></p>
              <p>Color of Crewmate: <span>{c.color}</span></p>

              <div className="buttons">
                <Link to={`/detail/${c.id}`} className="view-btn">View</Link>
                <Link to={`/edit/${c.id}`} className="edit-btn">Edit</Link>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  )
}
