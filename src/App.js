import React, { useState } from 'react';
import Home from "./Home";
import { BrowserRouter, NavLink } from "react-router-dom";
import Routes from "./Routes"
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
