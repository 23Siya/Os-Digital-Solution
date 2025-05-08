// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-[rgba(19,19,19,0.8)] shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-200">mYs<span className="text-blue-600">.dev</span></h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="text-lg font-semibold text-gray-200 hover:text-blue-600">About Us</a></li>
            <li><a href="#services" className=" text-lg font-semibold  text-gray-200 hover:text-blue-600">Services</a></li>
            <li><a href="#contact" className="text-lg font-semibold text-gray-200 hover:text-blue-600">Contact</a></li>
            <li><a href="#partnerwithus" className="text-lg font-semibold text-gray-200 hover:text-blue-600">Partner With Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
