import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <h1>Web Profile</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Protfolio Projects</Link>
      </div>
    </nav>
  );
}