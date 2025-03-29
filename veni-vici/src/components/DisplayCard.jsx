const DisplayCard = ({ item, handleBan }) => {
  return (
    <div className="card">
      <h2>{item.name}</h2>

      <div className="attribute-row">
        <span className="pill">{item.name}</span>
        <span className="pill">{item.lifespan}</span>
        <span className="pill clickable" onClick={() => handleBan(item.origin)}>
          {item.origin || "Unknown"}
        </span>
      </div>


      <img src={item.image} alt={item.name} className="dog-image" />
    </div>
  );
};

export default DisplayCard;
