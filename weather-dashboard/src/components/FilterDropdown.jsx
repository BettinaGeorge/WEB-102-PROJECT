export default function FilterDropdown({ value, onChange, data }) {
    const weatherTypes = [...new Set(data.map(item => item.weather.description))];
    return (
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="All">All</option>
        {weatherTypes.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    );
  }
  