import Nav from "../Nav";
import './Header.css'; // Assurez-vous d'importer votre fichier CSS

const Header = () => {
  return (
    <div className="header">
      <div className="title1">Raku</div>
      <Nav />
    </div>
  );
};

export default Header;
