import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar
} from 'recharts';

export default function Charts({ data }) {
  return (
    <div style={{ width: '100%', marginTop: '2rem' }}>
      {/* Line Chart: Temperature by City */}
      <h3 style={{ textAlign: 'center' }}>🌡️ Temperature by City</h3>
      <div style={{ height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="city_name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temp" stroke="#8884d8" name="Temperature (°C)" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart: Humidity by City */}
      <h3 style={{ textAlign: 'center', marginTop: '3rem' }}>💧 Humidity by City</h3>
      <div style={{ height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="city_name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="rh" fill="#82ca9d" name="Humidity (%)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
