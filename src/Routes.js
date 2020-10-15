import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import ColorFilter from "./ColorFilter";
import './App.css';

function Routes({colors}) {

  return (
      <Switch>
        <Route exact path="/colors/:color"><ColorFilter colors={colors}/></Route>
        <Redirect to="/colors" />
      </Switch>
      
  );
}

export default Routes;