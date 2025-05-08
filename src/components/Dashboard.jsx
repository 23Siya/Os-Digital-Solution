import React from 'react';
import AboutUs from './AboutUs';
import Services from './Services';
import ContactUs from './ContactUs';
import PartnerWithUs from './PartnerWithUs';

const Dashboard = () => {
  return (
    <main className="container mx-auto px-0 py-1">
      {/* About Us Section */}
      <section id="about" className="mb-0">
        <AboutUs />
      </section>

      {/* Services Section */}
      <section id="services" className="mb-0">
        <Services />
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-0">
        <ContactUs />
      </section>

      {/* Partner With Us Section */}
      <section id="partnerwithus" className="mb-0">
        <PartnerWithUs />
      </section>
    </main>
  );
};

export default Dashboard;