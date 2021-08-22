import './App.css';
import React, { Component }  from 'react';
import Navigation from "./components/Navigation.js";
import {Switch, Redirect, Route} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
      <>
          <Switch>
              <Route exact path={'/'}>
                  <Home/>
              </Route>
              <Route exact path={'/*'}>
                  <Navigation/>
              </Route>
          </Switch>
      </>

  );
}

export default App;
