import HoriCard from "./HoriCards";
import horiCardData from "../dataFile/horiCardData.json";

const HorizontalSlider = () => {
  return (
    <div className="">
      <p className="h3 text-b">Trending</p>
      <div className="overflow-x-auto flex whitespace-nowrap py-4">
        <div className="flex gap-4">
          {horiCardData.map(() => (
            <HoriCard
              key={horiCardData.id}
              image={horiCardData.image}
              label={horiCardData.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalSlider;
