import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "20px", background: "#111", color: "#fff" }}>
      <h2>Aurum Restaurant</h2>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/chef">Chef</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;