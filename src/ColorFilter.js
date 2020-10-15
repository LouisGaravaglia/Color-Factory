import React from 'react';
import { useParams } from "react-router-dom";
import ColorItem from "./ColorItem"
import './App.css';

function ColorFilter ({colors}) {
    const {color} = useParams();
  if (color) {
      const currentColor = colors.find(
          item => item.toLowerCase() === color.toLowerCase() 
      );
      return <ColorItem color={currentColor} />
  }
  return null;
}

export default ColorFilter;