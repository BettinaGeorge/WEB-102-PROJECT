import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../supabase'
import './Detail.css'

export default function Detail() {
  const { id } = useParams()
  const [crewmate, setCrewmate] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase.from('crewmates').select().eq('id', id).single()
      if (error) {
        setError('Crewmate not found.')
      } else {
        setCrewmate(data)
      }
      setLoading(false)
    }

    fetchCrewmate()
  }, [id])

  if (loading) return <main className="detail-page"><p>Loading...</p></main>
  if (error) return <main className="detail-page"><p>{error}</p></main>

  return (
    <main className="detail-page">
      <h1>{crewmate.name}</h1>
      <p><strong>Speed:</strong> {crewmate.speed} mph</p>
      <p><strong>Color:</strong> {crewmate.color}</p>
      <Link to={`/edit/${crewmate.id}`} className="edit-link">Edit Crewmate</Link>
    </main>
  )
}
