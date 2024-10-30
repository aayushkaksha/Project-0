import PropTypes from 'prop-types';


const HoriCard = ({ image, label }) => {
  return (
    <div className="flex flex-col items-center mx-2 w-26 p-3 text-center rounded-md bg-gray-300">
      <div
        className="w-20 h-20 rounded-full bg-cover bg-center mb-2 bg-gray-500"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <p className="text-sm text-gray-800">{label}</p>
    </div>
  );
};

HoriCard.propTypes = {
    image: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  };

export default HoriCard;
