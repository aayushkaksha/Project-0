// Women.js
import HorizontalSlider from "../components/HoriSlider"; 
import NavBar from "../components/NavBar";

const Women = () => {
  const cards = [
    { image: 'https://via.placeholder.com/70', label: 'Label 1' },
    { image: 'https://via.placeholder.com/70', label: 'Label 2' },
    { image: 'https://via.placeholder.com/70', label: 'Label 3' },
    // Add more cards as needed
  ];

  return (
    <div>
      <NavBar />
      <div>
        <HorizontalSlider cards={cards} /> {/* Pass `cards` as an object prop */}
      </div>
    </div>
  );
};

export default Women;
