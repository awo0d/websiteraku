import './nav.css';
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/leraku">Le Raku</Link></li> {/* Lien vers la page LeRaku */}
        <li><Link to="/masques">Masques</Link></li>
        <li><Link to="/personnages">Personnages</Link></li>
        <li><Link to="/boites">Boites</Link></li>
        <li><Link to="/expositions">Expositions</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;

