import React from 'react';
import HelpCenter from './Support/HelpCenter';
import ContactSupport from './Support/ContactSupport';
import FAQ from './Support/FAQ';

const Help = () => {
  return (
    <div className="p-6 bg-orange-600 min-h-screen">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Support Center</h1>
      <p className="text-center text-gray-700 mb-8">
        Welcome to the Support Center. Choose an option below to get started.
      </p>

      {/* FAQ Section */}
      <section className="mb-12 w-full max-w-screen-lg mx-auto">
      
        <FAQ />
      </section>

      {/* Help Center Section */}
      <section className="mb-12 w-full max-w-screen-lg mx-auto">
       
        <HelpCenter />
      </section>

      {/* Contact Support Section */}
      <section className="w-full max-w-screen-lg mx-auto">
     
        <ContactSupport />
      </section>
    </div>
  );
};

export default Help;
