import useTextures from "../../hooks/useTextures";
import usePlumiers from "../../hooks/usePlumiers";
import "./leraku.css";
import Card from "../../components/Card";

const Leraku = () => {
  const { textures } = useTextures();
  const { plumiers } = usePlumiers();
  //const plumiers = [...textures]; // Copie des textures pour les plumiers ou utilisez une autre source de données
 console.log(textures);
  return (
    <div className="leraku-container">
      <div className="red-band first-band"></div> {/* Première bande rouge */}
      <div className="red-band second-band"></div> {/* Deuxième bande rouge */}
      <div className="intro-text">
        <h1 className="title">Les boites</h1>
        <p className="subtitle">Petites séries et pièces uniques</p>
        <p className="highlighted-text">Texturées:</p>
      </div>
      <div className="gallery"> 
        {textures && textures.map((item)=>(
          <Card key={item.id} item={item}/>
        ))}
      </div>
      <div className="second-intro-text">
        <p className="highlighted-text">Plumiers (pièces uniques) </p>
      </div>
      <div className="second-gallery"> 
        {plumiers && plumiers.map((item)=>(
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default Leraku;
