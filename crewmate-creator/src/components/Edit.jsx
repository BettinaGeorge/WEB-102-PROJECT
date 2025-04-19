import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'
import './Edit.css'

export default function Edit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [speed, setSpeed] = useState('')
  const [color, setColor] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase.from('crewmates').select().eq('id', id).single()
      if (error) {
        setError('Crewmate not found.')
      } else {
        setName(data.name)
        setSpeed(data.speed)
        setColor(data.color)
      }
      setLoading(false)
    }

    fetchCrewmate()
  }, [id])

  const handleUpdate = async (e) => {
    e.preventDefault()
    setSuccess(false)
    const { error } = await supabase
      .from('crewmates')
      .update({ name, speed: parseFloat(speed), color })
      .eq('id', id)

    if (error) {
      setError('Error updating crewmate.')
    } else {
      setError(null)
      setSuccess(true)
    }
  }

  const handleDelete = async () => {
    const { error } = await supabase.from('crewmates').delete().eq('id', id)
    if (!error) {
      navigate('/gallery')
    }
  }

  if (loading) return <main className="edit-page"><p>Loading...</p></main>
  if (error) return <main className="edit-page"><p>{error}</p></main>

  return (
    <main className="edit-page">
      <h1>Edit Crewmate</h1>
      <form onSubmit={handleUpdate}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>

        <label>
          Speed (mph):
          <input type="number" value={speed} step="0.1" onChange={e => setSpeed(e.target.value)} />
        </label>

        <fieldset>
          <legend>Color:</legend>
          {['Red', 'Pink', 'Purple', 'Green', 'Yellow', 'Blue', 'Orange', 'Rainbow'].map(col => (
            <label key={col}>
              <input
                type="radio"
                name="color"
                value={col}
                checked={color === col}
                onChange={() => setColor(col)}
              />
              {col}
            </label>
          ))}
        </fieldset>

        <button type="submit">Update Crewmate</button>
        <button type="button" onClick={handleDelete} className="delete-btn">Delete Crewmate</button>
        {success && <p className="success">Crewmate updated!</p>}
      </form>
    </main>
  )
}
