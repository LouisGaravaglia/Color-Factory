import React, { useState } from 'react';
import AddColorForm from "./AddColorForm";
import { BrowserRouter, NavLink } from "react-router-dom";
import Nav from "./Nav";
import Routes from "./Routes"
import ColorsList from "./ColorsList";
import './App.css';

function Home() {
  const [colorArray, setColorArray] = useState([])
  const baseURL = "/colors/"
  const addColor = (newColor) => {
    setColorArray(colors => [...colors, newColor])
  }

  return (
    <div className="App">
      <AddColorForm addColor={addColor}/>
      <Nav colors={colorArray}/>
        <Routes colors={colorArray}/>
    </div>
  );
}

export default Home;
