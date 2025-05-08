import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Build modern and responsive websites.',
      image: '/assets/images/web-development.jpg', // Replace with your image path
    },
    {
      title: 'Mobile App Development',
      description: 'Create user-friendly mobile applications.',
      image: '/assets/images/mobile-app.jpg', // Replace with your image path
    },
    {
      title: 'Digital Marketing',
      description: 'Boost your online presence with digital marketing.',
      image: '/assets/images/digital-marketing.jpg', // Replace with your image path
    },
    {
      title: 'Graphic Design',
      description: 'Design stunning visuals for your brand.',
      image: '/assets/images/graphic-design.jpg', // Replace with your image path
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your website’s search engine ranking.',
      image: '/assets/images/seo.jpg', // Replace with your image path
    },
    {
      title: 'Cloud Solutions',
      description: 'Leverage the power of cloud computing.',
      image: '/assets/images/cloud.jpg', // Replace with your image path
    },
    {
      title: 'E-commerce Solutions',
      description: 'Develop robust e-commerce platforms.',
      image: '/assets/images/ecommerce.jpg', // Replace with your image path
    },
    {
      title: 'IT Consulting',
      description: 'Get expert advice for your IT needs.',
      image: '/assets/images/it-consulting.jpg', // Replace with your image path
    },
  ];

  return (
    <div
      className="bg-white p-6 shadow rounded-lg"
      style={{ backgroundImage: "url('/src/assets/images/contacts.jpg')" }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-600 p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold mb-2 text-white">{service.title}</h3>
            <p className="text-gray-100">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;