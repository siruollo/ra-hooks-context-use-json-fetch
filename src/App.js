import React from "react";
import "./App.css";

import Fetch from "./components/Fetch";

function App() {
  return (
    <div className="container">
      <div className="background-element"> </div>{" "}
      <div className="highlight-window">
        <div className="highlight-overlay"> </div>{" "}
      </div>{" "}
      <div className="window">
        <Fetch url="http://localhost:7070/data" />
        <Fetch url="http://localhost:7070/error" />
        <Fetch url="http://localhost:7070/loading" />
      </div>{" "}
    </div>
  );
}

export default App;
