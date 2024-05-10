import useMasques from "../../hooks/useMasques";
import "./masque.css";
import Card from "../../components/Card";

const Masque = () => {
  const { masques } = useMasques();
  console.log(masques);
  return (
    <div className="lemasque-container">
      <div className="intro-text1">
        <h1 className="title1">Les Masques</h1> {/* Modifier le titre */}
        <p className="subtitle1">Pièces Uniques</p> {/* Modifier le sous-titre */}
        
      </div>
      <div className="gallery1"> 
        {masques && masques.map((item)=>(
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default Masque;
