import HogTile from "./HogTile";

function HogsContainer({ hogs, handleHogChange }) {
  return (
    <div className="ui grid container">
      {hogs.map((hog) => (
        <HogTile hog={hog} handleClick={handleHogChange} />
      ))}
    </div>
  );
}

export default HogsContainer;
