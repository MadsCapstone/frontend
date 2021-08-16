import './App.css';
import React, { Component }  from 'react';
import Navigation from "./components/Navigation.js";
import {BrowserRouter, Redirect} from "react-router-dom";

function App() {
  return (
      <>
        <Navigation/>
        <Redirect exact from="/" to="/Home" />
      </>

  );
}

export default App;
