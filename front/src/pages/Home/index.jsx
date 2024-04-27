import useArt from "../../hooks/useArt";
import "./home.css";

const Home = () => {
  const {arts}=useArt();
  return (
    <div className="home-container">
      Home
    </div>
  );
};

export default Home;
