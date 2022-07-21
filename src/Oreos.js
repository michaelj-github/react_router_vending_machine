import React from "react";
import { Link } from "react-router-dom";

function Oreos() {
    return (
      <div class="container">        
      <img
        src="https://images.pexels.com/photos/12342219/pexels-photo-12342219.jpeg"
        alt="Oreos"
      />
      <div class="centered"><h1><Link to="/">GO BACK!</Link></h1></div>
        </div>
    )
}

export default Oreos;


