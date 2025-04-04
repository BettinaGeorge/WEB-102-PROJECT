export default function SearchBar({ value, onChange }) {
    return (
      <input
        type="text"
        placeholder="Search cities..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
  