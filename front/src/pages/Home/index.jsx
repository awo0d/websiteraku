import React from "react";
import useTextures from "../../hooks/useTextures";
import usePlumiers from "../../hooks/usePlumiers";
import useMasques from "../../hooks/useMasques";
import "./home.css";

const Home = () => {
  const { textures } = useTextures();
  const { plumiers } = usePlumiers();
  const { masques } = useMasques();
  return (
    <div className="home-container">
      <div className="content">
        <h1>Atelier Raku San</h1>
        <p>Sandrine ALLEGRINI</p>
        <p>Céramiste</p>
        <hr />
        <div className="schedule">
          <p>♦ Cours à l'atelier</p>
          <p>Quelques places sont encore disponibles aux horaires suivants :</p>
          <ul className="custom-ul">
            <li>• Mercredi matin de 10h à midi,</li>
            <li>• Mercredi soir de 18h à 20h,</li>
            <li>• Jeudi après-midi de 13h30 à 15h30.</li>
          </ul>
        </div>
        <p className="contact-info">Pour tout renseignement, me contacter par mail : <a href="mailto:sandallegrini@yahoo.fr">sandallegrini@yahoo.fr</a></p>
      </div>
      <div className="background-image"></div> {/* Ajout de la div pour l'image */}
    </div>
  );
};

export default Home;
