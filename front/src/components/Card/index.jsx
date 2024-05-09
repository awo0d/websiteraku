import './card.css';

const Card = ({item}) => {
  return (
    <div className="card" > 
        <img src={item.image} alt={item.name}/>
    </div>
    
  )
}

export default Card