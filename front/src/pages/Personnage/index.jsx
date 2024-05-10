import usePersonnages from "../../hooks/usePersonnages";
import usePersos from "../../hooks/usePersos";
import "./personnage.css";
import Card from "../../components/Card";

const Personnage = () => {
  const { personnages } = usePersonnages();
  const { persos } = usePersos();
  //const plumiers = [...textures]; // Copie des textures pour les plumiers ou utilisez une autre source de données
 
  return (
    <div className="personnage-container">
      <div className="intro-text2">
        <h1 className="title2">Les boites</h1>
        <p className="subtitle2">Petites séries et pièces uniques</p>
        <p className="highlighted-text2">Texturées:</p>
      </div>
      <div className="gallery2"> 
        {personnages && personnages.map((item)=>(
          <Card key={item.id} item={item}/>
        ))}
      </div>
      <div className="second-intro-text2">
        <p className="highlighted-text2">Plumiers (pièces uniques) </p>
      </div>
      <div className="second-gallery2"> 
        {persos && persos.map((item)=>(
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default Personnage;
