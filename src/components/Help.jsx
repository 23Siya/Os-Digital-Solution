import React from 'react';
import HelpCenter from './Support/HelpCenter';
import ContactSupport from './Support/ContactSupport';
import FAQ from './Support/FAQ';


const help = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-3">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Support</h1>
      <p className="text-center text-gray-600 mb-8">
        Welcome to the Support Center. Choose an option below to get started.
      </p>
    </div>
  );
};

export default help;