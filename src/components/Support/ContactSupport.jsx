import React from 'react';

const ContactSupport = () => {
  const personnel = [
    {
      name: 'Siyabonga Matsheme',
      role: 'Technical Support Specialist',
      email: 'siyabonga.matsheme@osdigitalsolutions.com',
      phone: '+123 456 7891',
      helpType: 'Technical Support',
    },
    {
      name: 'Thuli Dlamini',
      role: 'Billing Specialist',
      email: 'thuli.dlamini@osdigitalsolutions.com',
      phone: '+123 456 7892',
      helpType: 'Billing Inquiry',
    },
    {
      name: 'Kabelo Mokoena',
      role: 'Customer Success Manager',
      email: 'kabelo.mokoena@osdigitalsolutions.com',
      phone: '+123 456 7893',
      helpType: 'General Questions',
    },
  ];

  return (
    <div className="p-6 bg-gray-100 ">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Support</h2>
      <p className="text-gray-600 text-center mb-6">
        Need assistance? Contact our support team, and we’ll be happy to help you.
      </p>

      {/* Personnel Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {personnel.map((person, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-bold text-gray-800">{person.name}</h3>
            <p className="text-gray-600">{person.role}</p>
            <p className="text-gray-500 mb-2">
              <strong>Help Type:</strong> {person.helpType}
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a
                href={`mailto:${person.email}`}
                className="text-blue-600 hover:underline"
              >
                {person.email}
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a
                href={`tel:${person.phone}`}
                className="text-blue-600 hover:underline"
              >
                {person.phone}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSupport;