import React from "react";
import { Link } from "react-router-dom";

function Popcorn() {
    return (
      <div class="container">       
      <img
        src="https://images.pexels.com/photos/806880/pexels-photo-806880.jpeg"
        alt="Popcorn"
      />
      <div class="centered"><h1><Link to="/">GO BACK!</Link></h1></div>
        </div>
    )
}

export default Popcorn;