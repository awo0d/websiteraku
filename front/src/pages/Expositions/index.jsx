import React from "react";
import "./exposition.css";

const Expositions = () => {
  return (
    <div className="expositions-container">
      <h2 className="title">Expositions et Marchés</h2>
      <p className="subtitle">Où me trouver ...</p>
      <div className="expositions">
        <h3 className="year">2024</h3>
        <ul>
          <li>
            <span className="event">♦</span> RAKU Le Bonheur dans le hasard, biennale de céramique, du 6 Avril au 20 mai, espace Saint Nazaire, Sanary sur Mer (83).
          </li>
          <li>
            <span className="event">♦</span> Festival du Mieux Etre du 10 au 12 mai, Espace Malraux - Six-Fours les Plages (83).
          </li>
          <li>
            <span className="event">♦</span> Galerie "Juste à Côté", 8 rue de la Congrégation au village du Castellet (83), du 9 au 22 août et du 13 au 19 septembre.
          </li>
        </ul>

        <h3 className="year">2023</h3>
        <ul>
          <li>
            <span className="event">♦</span> Exposition en plein air dans le cadre des Journées Européennes des Métiers d'Arts, les 1er et 2 avril à Ollioules  (83).
          </li>
          <li>
            <span className="event">♦</span> Festival du Mieux Etre, les 13 et 14 mai à l'Espace Malraux - Six-Fours les Plages (83).
          </li>
          <li>
            <span className="event">♦</span> La valse des Capians, du 19 au 21 mai, quai du Port - Bandol (83).
          </li>
          <li>
            <span className="event">♦</span> "Rue des Artisans", rue de la république, Six-Fours les Plages (83), le matin des 17 et 24 juin ; 1er, 8 et 22 juillet ;  12 et 19  août et le 2 septembre.
          </li>
          <li>
            <span className="event">♦</span> Galerie "Juste à Côté", 8 rue de la Congrégation au village du Castellet (83), du 26 juillet au 10 août.
          </li>
          <li>
            <span className="event">♦</span> Galerie "Juste à Côté", 8 rue de la Congrégation au village du Castellet (83), du vendredi au dimanche du 1er au 24 décembre 2023.
          </li>
        </ul>

        <h3 className="year">2022</h3>
        <ul>
          <li>
            <span className="event">♦</span> RAKU Le Bonheur dans le hasard, biennale de céramique, du 9 Avril au 8 mai 2022, espace Saint Nazaire, Sanary (83).
          </li>
          <li>
            <span className="event">♦</span> Exposition du 12 avril au 1er mai 2022, Maison Tholosan, Bandol (83).
          </li>
          <li>
            <span className="event">♦</span> Marché du samedi, rue de la république, Six-Fours les Plages (83), les 18 et 25 juin, les 2, 9 et 16 juillet et les 6, 13, 20 et 27 août 2022.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Expositions;
