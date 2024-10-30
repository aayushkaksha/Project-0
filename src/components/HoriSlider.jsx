import HoriCard from './HoriCards';
import horiCardData from '../dataFile/horiCardData.json'

const HorizontalSlider = () => {
  return (
    <div className="overflow-x-auto flex whitespace-nowrap py-4">
      <div className="flex gap-4">
        {horiCardData.cards.map((card, index) => (
          <HoriCard key={index} image={card.image} label={card.label} />
        ))}
      </div>
    </div>
  );
};


export default HorizontalSlider;
