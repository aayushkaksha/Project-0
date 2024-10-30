import ContactInfo from '../components/ContactInfo';
import ShippingInfo from '../components/ShippingInfo';
import DeliveryMethod from '../components/DeliveryMethod';

const Checkout = () => {
  return (
    <div className="max-w-2xl m-6 mx-auto p-6 bg-white shadow-lg rounded-lg">
      <form className="space-y-8">
        <ContactInfo />
        <ShippingInfo />
        <DeliveryMethod />
        <div className="flex justify-end">
          <button 
            type="submit" 
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-200 ease-in-out">
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
