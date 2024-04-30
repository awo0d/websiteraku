import useArt from "../../hooks/useArt";
import "./leraku.css";
import Card from "../../components/Card";

const Leraku = () => {
  const { arts } = useArt();
  return (
    <div className="home-container">
      <div className="content">
        <div className="text-container">
          <h1>Atelier Raku San</h1>
          <p>Sandrine ALLEGRINI</p>

        </div>
        <div className="gallery" > 
        {arts && arts.map((item)=>(
          <Card key={item.id} item={item}/>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Leraku;
