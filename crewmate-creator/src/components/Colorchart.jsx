import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

export default function ColorChart({ crewmates }) {
  const data = Object.values(
    crewmates.reduce((acc, c) => {
      acc[c.color] = acc[c.color] || { color: c.color, count: 0 }
      acc[c.color].count += 1
      return acc
    }, {})
  )

  return (
    <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
      <h2 style={{ color: 'white' }}>Color Distribution</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="color" stroke="#ccc" />
          <YAxis allowDecimals={false} stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="count" fill="#00d09c" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
