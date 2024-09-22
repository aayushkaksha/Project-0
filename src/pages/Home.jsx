import Card from "../components/Card";
import Carousel from "../components/Carasol";
import NavBar from "../components/NavBar";
const Home = () => {

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <Carousel />

      <Card />
    </div>
  );
};

export default Home;