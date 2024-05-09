import React, { useState } from 'react';
import './nav.css';
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav-container">
      <nav>
        <button className="menu-button" onClick={toggleMenu}>Menu</button>
        <ul className={`nav-ul ${menuOpen ? "menu-open" : "menu-closed"}`}>
          <li className="nav-li"><Link to="/">Accueil</Link></li>
          <li className="nav-li"><Link to="/leraku">Le Raku</Link></li>
          <li className="nav-li"><Link to="/masque">Masques</Link></li>
          <li className="nav-li"><Link to="/personnages">Personnages</Link></li>
          <li className="nav-li"><Link to="/boites">Boites</Link></li>
          <li className="nav-li"><Link to="/expositions">Expositions</Link></li>
          <li className="nav-li"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
