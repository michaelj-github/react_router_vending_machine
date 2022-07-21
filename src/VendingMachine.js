import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
    return (
        <>
      <img
        src="https://images.pexels.com/photos/5495383/pexels-photo-5495383.jpeg"
        alt="Vending Machine"
      />
      
      <div class="centered">
      <h1><Link to="/fries">Get Fries!</Link></h1>
      <h1><Link to="/popcorn">Get Popcorn!</Link></h1>
      <h1><Link to="/oreos">Get Oreos!</Link></h1>        
      </div>
        </>
    )
}

export default VendingMachine;