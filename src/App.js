import React from 'react';
import './App.css';
import VendingMachine from "./VendingMachine";
import Fries from "./Fries";
import Popcorn from "./Popcorn";
import Oreos from "./Oreos";
import NavBar from "./NavBar";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/fries">
          <Fries />
        </Route>
        <Route exact path="/popcorn">
          <Popcorn />
        </Route>
        <Route exact path="/oreos">
          <Oreos />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;