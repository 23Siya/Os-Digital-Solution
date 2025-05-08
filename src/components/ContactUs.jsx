import React from 'react';

const Contact = () => {
  const staffs = [
    {
      name: 'Siyabonga Matsheme',
      role: 'Founder & CEO',
      profession: 'Software Engineer',
      description: 'Siyabonga is a visionary leader with a passion for technology and innovation.',
      image: '/assets/images/web-development.jpg',
      email: 'siyabonga.matsheme@Matsysol.co.za',
    },
    {
      name: 'Thuli Dlamini',
      role: 'Operations Manager',
      profession: 'Project Coordinator',
      description: 'Thuli ensures our projects run smoothly and clients are always satisfied.',
      image: '/assets/images/operations.jpg',
      email: 'thuli.dlamini@Matsysol.co.za',
    },
    {
      name: 'Kabelo Mokoena',
      role: 'Lead Developer',
      profession: 'Full-Stack Developer',
      description: 'Kabelo leads our dev team with innovative technical expertise and teamwork.',
      image: '/assets/images/developer.jpg',
      email: 'kabelo.mokoena@Matsysol.co.za',
    },
  ];

  return (
    <div
      className="bg-white p-6 shadow rounded-lg mb-1"
      style={{ backgroundImage: "url('/src/assets/images/back5.jpg')" }}
    >
      {/* Meet Our Team Section */}
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow mb-10">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Meet Our Team</h2>
        <p className="text-gray-700 text-center mb-6">
          Our team of dedicated professionals is here to help you achieve your goals. We bring
          expertise, creativity, and passion to every project we undertake.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffs.map((staff, index) => (
            <div
              key={index}
              className="bg-green-100 p-4 rounded-lg shadow hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <img
                src={staff.image}
                alt={`${staff.name} - ${staff.role}`}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-1">{staff.name}</h3>
              <p className="text-gray-600">{staff.role}</p>
              <p className="text-gray-500 mb-2">{staff.description}</p>
              <a href={`mailto:${staff.email}`} className="text-blue-600 hover:underline">
                {staff.email}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Contact Us</h2>
        <p className="text-gray-700 text-center mb-6">
          Have questions or need assistance? Reach out to us, and we'll be happy to help!
        </p>

        <div className="text-center space-y-2 text-gray-700">
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@osdigitalsolutions.com" className="text-blue-600 hover:underline">
              info@osdigitalsolutions.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:+1234567890" className="text-blue-600 hover:underline">
              +123 456 7890
            </a>
          </p>
          <p>
            <strong>Address:</strong> 123 Digital Street, Tech City
          </p>

          {/* Optional: Social Media */}
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://linkedin.com/company/matsysol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/matsysol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com/matsysol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
