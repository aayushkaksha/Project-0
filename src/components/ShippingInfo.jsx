const ShippingInfo = () => {
    return (
      <div className="p-6 border rounded-md bg-gray-50">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Shipping Information</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
            <div className="mt-1">
              <input 
                id="first-name" 
                name="first-name" 
                type="text" 
                autoComplete="given-name" 
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
  
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
            <div className="mt-1">
              <input 
                id="last-name" 
                name="last-name" 
                type="text" 
                autoComplete="family-name" 
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
  
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
            <div className="mt-1">
              <input 
                id="company" 
                name="company" 
                type="text" 
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
  
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <div className="mt-1">
              <input 
                id="address" 
                name="address" 
                type="text" 
                autoComplete="street-address" 
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
  
          <div>
            <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">Apartment, suite, etc.</label>
            <div className="mt-1">
              <input 
                id="apartment" 
                name="apartment" 
                type="text" 
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
  
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <div className="mt-1">
              <input 
                id="city" 
                name="city" 
                type="text" 
                autoComplete="address-level2" 
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
  
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
            <div className="mt-1">
              <select 
                id="country" 
                name="country" 
                autoComplete="country-name" 
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
  
          <div>
            <label htmlFor="region" className="block text-sm font-medium text-gray-700">State / Province</label>
            <div className="mt-1">
              <input 
                id="region" 
                name="region" 
                type="text" 
                autoComplete="address-level1" 
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
  
          <div>
            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">Postal code</label>
            <div className="mt-1">
              <input 
                id="postal-code" 
                name="postal-code" 
                type="text" 
                autoComplete="postal-code" 
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
  
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <div className="mt-1">
              <input 
                id="phone" 
                name="phone" 
                type="text" 
                autoComplete="tel" 
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ShippingInfo;
  