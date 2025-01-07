import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <h2>AI Prompt Builder</h2>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/create">Create Prompt</Link></li>
    </ul>
  </nav>
);

export default Navbar;
