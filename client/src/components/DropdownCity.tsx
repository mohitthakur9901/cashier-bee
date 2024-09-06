import React, { useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DropdownCityProps {
  city: string;
  onCityChange: (selectedCity: string) => void;
}

const DropdownCity: React.FC<DropdownCityProps> = ({ city, onCityChange }) => {
  const IndiaCities = [
    "New Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Kolkata", 
    "Ahmedabad", "Pune", "Jaipur", "Surat", "Lucknow", "Kanpur", 
    "Nagpur", "Indore", "Thane"
  ];

  // Update local state if the city prop changes
  const [selectedCity, setSelectedCity] = useState<string>(city);

  useEffect(() => {
    setSelectedCity(city);
  }, [city]);

  const handleCityChange = (selectedCity: string) => {
    setSelectedCity(selectedCity);
    onCityChange(selectedCity); // Notify parent component of the change
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        {selectedCity || "Select a City"}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <DropdownMenuLabel className="block px-4 py-2 text-sm text-gray-700">
          Select a City
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="border-t border-gray-200" />
        {IndiaCities.map((city) => (
          <DropdownMenuItem
            key={city}
            onClick={() => handleCityChange(city)}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
          >
            {city}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownCity;
