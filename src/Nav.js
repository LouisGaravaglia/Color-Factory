import React from 'react';
import { NavLink } from "react-router-dom";
import './App.css';

function Nav({colors}) {
    const baseURL = "/colors/"
  return (
      <nav>
        <h4>Please select a color</h4>
        {colors.map(color => (
            <NavLink to={baseURL + color}>{color}</NavLink>
        ))}
      </nav>
  );
}

export default Nav;
