import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";

export default function Layout({ children }) {
  const currentDate = new Date().getFullYear();
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright {currentDate} Web Profile</p>
      </footer>
    </div>
  );
}
