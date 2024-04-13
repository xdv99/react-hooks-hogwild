function Controls({ sort, filter, handleSort, handleFilter }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <label>Sort By:</label>
      <select value={sort} onChange={handleSort}>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
      <label>Filter: </label>
      <input type="checkbox" checked={filter} onChange={handleFilter} />{" "}
      Greased?
    </div>
  );
}

export default Controls;
