
import cardData from '../dataFile/cardData.json';

const Card = () => {

  return (
    <div className='main-container flex justify-center items-center '>
    

    <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10">
      {cardData.map((card) => (
        <div key={card.id} className="max-w-sm rounded overflow-hidden shadow-lg my-4">
          <div className="relative">
            <img className="w-full" src={card.Image} alt={card.Name} />
            <button className="absolute top-0 right-0 m-2">
              <svg className="w-6 h-6 text-gray-500 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{card.Name}</div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Rating: {card.Rating}/10
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              ${card.Price}
            </span>
          </div>
          <div className="px-6 py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
              + Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
    )}

export default Card;
