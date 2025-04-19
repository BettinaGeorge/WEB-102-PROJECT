import { useState } from 'react'
import { supabase } from '../supabase'
import './Create.css'

export default function Create() {
  const [name, setName] = useState('')
  const [speed, setSpeed] = useState('')
  const [color, setColor] = useState('Red')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSuccess(false)
    if (!name || !speed || !color) {
      setError('Please fill in all fields.')
      return
    }

    const { error } = await supabase.from('crewmates').insert({ name, speed: parseFloat(speed), color })

    if (error) {
      setError(error.message)
    } else {
      setSuccess(true)
      setName('')
      setSpeed('')
      setColor('Red')
      setError(null)
    }
  }

  return (
    <main className="create-page">
      <h1>Create a New Crewmate</h1>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Create Crewmate</button>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">Crewmate created successfully!</p>}
      </form>
    </main>
  )
}



