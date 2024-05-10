import React from "react";
import "./leraku.css";

const Leraku = () => {
  return (
    <div className="raku-container">
      <h2 className="title">Le Raku</h2>
      <div className="raku-image"></div>
      <p className="description">
        Le Raku est un procédé de cuisson céramique japonais qui remonte au XVIème siècle. Il est à l'origine lié à la cérémonie du thé. Le terme signifie littéralement : le bonheur dans le hasard. En effet, lors de la cuisson de l'émail, les pièces sont défournées à environ 960°C. Elles subissent donc un violent choc thermique puis sont ensuite enfumées. C'est le jeu de ces deux procédés qui font de la cuisson raku une source inépuisable de surprises toujours très riches d'enseignement.
      </p>
    </div>
  );
};

export default Leraku;
