import React, { useState, useEffect } from 'react';
import AddColorForm from "./AddColorForm";
import Nav from "./Nav";
import Routes from "./Routes"
import './App.css';

function Home() {
  const initialColors = JSON.parse(localStorage.getItem("colors")) || ["red", "green", "blue"];
  const [colorArray, setColorArray] = useState(initialColors)
  
  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colorArray)),
    [colorArray]
  );

  const addColor = (newColor) => {
    setColorArray(colors => [newColor, ...colors])
  }

  return (
    <div className="App">
      <AddColorForm addColor={addColor}/>
      <Nav colors={colorArray}/>
        <Routes colors={colorArray} />
    </div>
  );
}

export default Home;
