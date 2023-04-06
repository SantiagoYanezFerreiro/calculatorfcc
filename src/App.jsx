import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <div className="padButton">AC</div>
        <div className="padButton">C</div>
        <div className="padButton">/</div>
        <div className="padButton">*</div>
        <div className="padButton">7</div>
        <div className="padButton">8</div>
        <div className="padButton">9</div>
        <div className="padButton">-</div>
        <div className="padButton">4</div>
        <div className="padButton">5</div>
        <div className="padButton">6</div>
        <div className="padButton">+</div>
        <div className="padButton">1</div>
        <div className="padButton">2</div>
        <div className="padButton">3</div>
        <div className="padButton">=</div>
        <div className="padButton">0</div>
        <div className="padButton">.</div>
      </div>
    </div>
  );
}

export default App;
