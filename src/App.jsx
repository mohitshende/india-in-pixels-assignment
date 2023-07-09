import { useEffect, useState } from "react";
import "./App.css";
import IndiaMap from "./components/IndiaMap";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(localStorage?.getItem("states")?.split(","));
  }, []);

  return (
    <>
      <div id={"placeholder"} className="tooltip"></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IndiaMap state={state} setState={setState} />
      </div>
    </>
  );
}

export default App;
