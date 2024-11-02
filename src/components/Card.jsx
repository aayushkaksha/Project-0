import cardData from "../dataFile/cardData.json";

const Card = () => {
  return (
    <div className="ml-10 main-container flex justify-left items-center">
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10 px-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-200 hover:shadow-lg hover:scale-105"
          >
            <div className="relative h-0 pb-[75%]">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
                src={card.Image}
                alt={card.Name}
              />
              <button className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow hover:shadow-md transition-colors">
                <svg
                  className="w-5 h-5 text-gray-500 hover:text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </button>
              <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:shadow-md transition-colors">
                <svg
                  className="w-5 h-5 text-gray-500 hover:text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="mt-2 p-2 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={card.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {card.Name}
                    </a>
                  </h3>
                  
                </div>
                <p className="text-sm font-medium text-gray-900">Rs.{card.Price}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
