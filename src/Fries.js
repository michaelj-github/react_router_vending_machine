import React from "react";
import { Link } from "react-router-dom";

function Fries() {
    return (
      <div class="container">        
        <img
          src="https://images.pexels.com/photos/4109234/pexels-photo-4109234.jpeg"
          alt="Fries"
        />
        <div class="centered"><h1><Link to="/">GO BACK!</Link></h1></div>
      </div>
    )
}

export default Fries;