import React from 'react';
import { RestaurantProps } from '@/Types/Restaurant';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import DropdownCity from '@/components/DropdownCity';

interface RestaurantFormProps extends RestaurantProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCityChange : (selectedCity: string) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    loading: boolean;
}

const RestaurantForm: React.FC<RestaurantFormProps> = ({ 
    city, 
    country, 
    pinCode, 
    restaurantName, 
    state, 
    street, 
    handleChange, 
    handleSubmit, 
    handleCityChange,
    loading 
}) => {

    return (
        <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700">Restaurant Name</Label>
            <Input
              type="text"
              id="restaurantName"
              name="restaurantName"
              placeholder="Enter Restaurant Name"
              value={restaurantName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <DropdownCity city={city} onCityChange={handleCityChange} />
          </div>
          <div className="mb-4">
            <Label htmlFor="street" className="block text-sm font-medium text-gray-700">Street</Label>
            <Input
              type="text"
              id="street"
              name="street"
              placeholder="Enter Street"
              value={street}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="pinCode" className="block text-sm font-medium text-gray-700">Pin Code</Label>
            <Input
              type="text"
              id="pinCode"
              name="pinCode"
              placeholder="Enter Pin Code"
              value={pinCode}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="state" className="block text-sm font-medium text-gray-700">State</Label>
            <Input
              type="text"
              id="state"
              name="state"
              placeholder="Enter State"
              value={state}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</Label>
            <Input
              type="text"
              id="country"
              name="country"
              placeholder="Enter Country"
              value={country}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            }`}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
      
    );
};

export default RestaurantForm;
