import ContactInfo from '../components/ContactInfo';
import ShippingInfo from '../components/ShippingInfo';
import DeliveryMethod from '../components/DeliveryMethod';
import OrderSummary from '../components/OrderSummary';

const Checkout = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-8 bg-white shadow-xl rounded-lg md:flex space-y-10 md:space-y-0 md:space-x-10">
      {/* Left Form Section */}
      <form className="flex-grow space-y-6">
        <ContactInfo />
        <ShippingInfo />
        <DeliveryMethod />
      </form>
      
      {/* Right Order Summary Section */}
      <div className="w-full md:w-2/5 space-y-4">
        <OrderSummary />
        <div className="flex justify-center mt-4">
          <button 
            type="submit" 
            className="w-full px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out shadow-md">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
