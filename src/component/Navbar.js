import React from 'react';
import logo2 from '../assets/logo2.png'; // Import the logo image
import { FaUser } from 'react-icons/fa'; // Import user icon from react-icons/fa

function Navbar() {
  return (
    <div>
      <nav className="bg-yellow-500 px-2">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo and website name */}
          <div className="flex items-center">
            <img src={logo2} alt="Logo" className="h-25 w-40" /> 
          </div>
          
          {/* Navigation Menu */}
          <ul className="flex justify-center">
            <li className="mx-4">
              <a href="#" className="text-2xl text-green-700 hover:text-red-500">Home</a>
            </li>
            <li className="mx-4">
              <a href="#" className="text-2xl text-green-700 hover:text-red-500">Gallery</a>
            </li>
            <li className="mx-4">
              <a href="#" className="text-2xl text-green-700 hover:text-red-500">About Us</a>
            </li>
            <li className="mx-4">
              <a href="#" className="text-2xl text-green-700 hover:text-red-500">Contact Us</a>
            </li>
          </ul>

          {/* User icon */}
          <div>
            <FaUser className="text-gray-300 text-2xl mr-5 cursor-pointer" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
