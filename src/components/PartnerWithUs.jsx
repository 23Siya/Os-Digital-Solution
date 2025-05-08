import React from 'react';

const PartnerWithUs = () => {
  return (
    <div className="bg-gray-100 p-6 shadow rounded-lg">
      {/* Title Section */}
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Partner With Us</h2>
      <p className="text-center text-gray-600 mb-8">
        Looking to scale your operations, improve your technology stack, or reach new audiences?
        We’re here to make that happen—with you, not just for you.
      </p>
      {/* Adjusted Image Size */}
      <img
        src="/src/assets/images/group.jpg"
        alt="Partner With Us"
        className="mx-auto mb-8 w-full max-w-md h-auto rounded-lg shadow"
      />

      {/* Benefits Section */}
      <div className="space-y-8 mb-8 text-center">
        <section>
          <h3 className="text-2xl font-bold mb-2 text-gray-800">Innovation</h3>
          <p className="text-gray-600">
            Collaborate with a team of experts to bring cutting-edge ideas to life using the latest technologies.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-bold mb-2 text-gray-800">Tailored Solutions</h3>
          <p className="text-gray-600">
            We offer flexible partnerships that adapt to your unique needs—whether you're a startup or an established brand.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-bold mb-2 text-gray-800">Growth & Reach</h3>
          <p className="text-gray-600">
            Expand your business, streamline operations, and increase visibility with our tools and strategies.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-bold mb-2 text-gray-800">Reliable Support</h3>
          <p className="text-gray-600">
            Get dedicated support and ongoing collaboration to ensure long-term success.
          </p>
        </section>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to Build Something Great?</h3>
        <p className="text-gray-600 mb-6">
          Fill out the form below, and our team will get in touch with you to discuss the perfect partnership opportunity.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Let’s Build Together
        </a>
      </div>
    </div>
  );
};

export default PartnerWithUs;
