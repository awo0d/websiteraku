import useArt from "../../hooks/useArt";
import "./leraku.css";
import Card from "../../components/Card";

const Leraku = () => {
  const { arts } = useArt();
  return (
    <div>
      <div className="intro-text">
        <h1 className="title">Les boites</h1>
        <p className="subtitle">Petites séries et pièces uniques</p>
        <p className="highlighted-text">Texturées:</p>
      </div>
      <div className="gallery"> 
        {arts && arts.map((item)=>(
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default Leraku;
