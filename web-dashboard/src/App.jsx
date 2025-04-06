import React, { useEffect, useState } from "react";
import MoistureChart from "./components/MoistureChart";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://your-project-id.firebaseio.com/moisture.json")
      .then(res => res.json())
      .then(raw => {
        const values = Object.values(raw).map((value, i) => ({
          time: i,
          value
        }));
        setData(values);
      });
  }, []);

  return (
    <div className="App">
      <h1>🌱 Smart Plant Monitor</h1>
      <MoistureChart data={data} />
    </div>
  );
}

export default App;
