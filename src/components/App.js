import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "./HogsContainer";
import HogData from "./HogData";
import Controls from "./Controls";

function App() {
  const [selectedHogs, setSelectedHogs] = useState(hogs);
  const [selectedHog, setSelectedHog] = useState(null);
  const [sort, setSort] = useState("name");
  const [isGreased, setIsGreased] = useState(false);

  function handleHogChange(hog) {
    setSelectedHog(hog);
  }

  function handleSort(event) {
    setSort(event.target.value);
    setSelectedHog(
      selectedHogs.sort((a, b) =>
        sort === "name" ? a.name.localeCompare(b.name) : a.weight > b.weight
      )
    );
  }

  function handleFilter(event) {
    setIsGreased(event.target.checked);
    if (event.target.checked) {
      setSelectedHogs(hogs.filter((hog) => hog.greased));
    } else {
      setSelectedHogs(hogs);
    }
  }

  return (
    <div className="App">
      <Nav />
      <Controls handleSort={handleSort} handleFilter={handleFilter} />
      <HogsContainer hogs={selectedHogs} handleHogChange={handleHogChange} />
      {selectedHog === null ? null : (
        <HogData
          hog={selectedHog}
          handleCloseData={() => setSelectedHog(null)}
        />
      )}
    </div>
  );
}

export default App;
