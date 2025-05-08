import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Support = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Support</h1>
      <p className="text-center text-gray-600 mb-8">
        Welcome to the Support Center. Choose an option below to get started.
      </p>

      {/* Navigation Links */}
      <div className="flex justify-center space-x-4 mb-8">
        <Link
          to="help-center"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Help Center
        </Link>
        <Link
          to="contact-support"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Contact Support
        </Link>
        <Link
          to="faq"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          FAQ
        </Link>
      </div>

      {/* Render Nested Routes */}
      <Outlet />
    </div>
  );
};

export default Support;