function HogTile({ hog, handleClick }) {
  return (
    <div className="ui four wide column" onClick={() => handleClick(hog)}>
      <img src={hog.image} width="100%" />
      <h2>{hog.name}</h2>
    </div>
  );
}

export default HogTile;
