const BanList = ({ banList, handleUnban }) => {
  return (
    <div className="ban-panel">
      <h2>Ban List</h2>
      <p>Select an attribute in your listing to ban it</p>
      {banList.map((origin, idx) => (
        <button key={idx} className="ban-button" onClick={() => handleUnban(origin)}>
          {origin}
        </button>
      ))}
    </div>
  );
};

export default BanList;
