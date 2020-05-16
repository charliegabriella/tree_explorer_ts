import React from "react";
import Tree from "./components/Tree";

function App() {
  return (
    <div>
      {" "}
      <Tree name={"Charlita"} />
      <Tree name={"White birch"} scientificName={"Betula pendula"} />
      <Tree name={"Weeping willow"} scientificName={"Salix sepulcralis"} />
      <Tree name={"London planetree"} scientificName={"Platanus hybryda"} />
    </div>
  );
}

export default App;
