function HogData({ hog, handleCloseData }) {
  return (
    <div
      style={{
        width: "70%",
        margin: "0 auto",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#ffffffd9",
      }}
    >
      {/* CLose Button */}
      <button
        style={{ position: "absolute", top: 10, right: 10 }}
        onClick={handleCloseData}
      >
        X
      </button>
      <h1>{hog.name}</h1>
      <p>{`Speciality: ${hog.specialty}`}</p>
      <p>{`Weight: ${hog.weight}`}</p>
      <p>{`Highest Medal Achieved: ${hog["highest medal achieved"]}`}</p>
    </div>
  );
}

export default HogData;
