import useArt from "../../hooks/useArt";
import "./home.css";

const Home = () => {
  const { arts } = useArt();
  return (
    <div className="home-container">
      <div className="content">
        <h1>Atelier Raku San</h1>
        <p>Sandrine ALLEGRINI</p>
        <p>Céramiste</p>
        <hr />
        <p>♦ Cours à l'atelier</p>
        <p>Quelques places sont encore disponibles aux horaires suivants :</p>
        <ul>
          <li>Mercredi matin de 10h à midi,</li>
          <li>Mercredi soir de 18h à 20h,</li>
          <li>J- eudi après-midi de 13h30 à 15h30.</li>
        </ul>
        <p>Pour tout renseignement, me contacter par mail : <a href="mailto:sandallegrini@yahoo.fr">sandallegrini@yahoo.fr</a></p>
      </div>
    </div>
  );
};

export default Home;
