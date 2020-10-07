import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
