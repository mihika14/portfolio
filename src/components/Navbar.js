import React from "react";
import { Link } from "react-router-dom";

export default function Navbar () {
  return(
      <div class = "ui three item menu" >
      <Link to="/about" class="active item">Editorials</Link>
     <a class="item">Reviews</a>
     <a class="item">Upcoming Events</a>
    </div>
)}
