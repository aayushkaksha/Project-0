import Card from "../components/Card";
import Carousel from "../components/Carasol";
import NavBar from "../components/NavBar";
const Home = () => {

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <Carousel />

    <div className="horiCardCont">
    </div>

      <div className="cardCont">
        <div className="popular">

        </div>
        <div className="recommended">

        </div>
      </div>

      <Card />
    </div>
  );
};

export default Home;