import React from 'react';

const ContactSupport = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Contact Support</h1>
      <p className="text-gray-600 text-center">
        Need assistance? Contact our support team, and we’ll be happy to help you.
      </p>
      <div className="text-center mt-6">
        <p>Email: <a href="mailto:support@osdigitalsolutions.com" className="text-blue-600 hover:underline">support@osdigitalsolutions.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+123 456 7890</a></p>
      </div>
    </div>
  );
};

export default ContactSupport;