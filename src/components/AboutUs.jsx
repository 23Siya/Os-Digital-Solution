import React, { useEffect, useState } from 'react';

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sections = [


    {
        title: 'Who are we?',
        content:
          'Matsysol is a dynamic and innovative tech solutions provider dedicated to empowering communities through smart, sustainable, and accessible digital technology. Rooted in African excellence, we aim to close the digital divide by offering tailored IT support, software solutions, and tech-driven services that uplift individuals, startups, and organizations across the continent.',
          image: '/src/assets/images/logowhite.png',
        article:
          'Founded with the vision of serving the people, Matsysol is more than a company — it’s a movement towards inclusive progress, where technology becomes a tool for empowerment, education, and economic growth.',
      },
    {
      title: 'Our Vision',
      content:
        'To become Africa’s leading people-centered tech company, driving transformation and economic empowerment through sustainable innovation and inclusive digital solutions.We envision a continent where technology is not a privilege but a fundamental right — where every township, rural area, and underserved community has access to tools, knowledge, and infrastructure that enable progress. Our vision is built on three pillars:.',
      image: '/src/assets/images/mission.jpg',
      article: (
        <ul className="list-disc list-inside text-gray-200">
          <li><span className="text-blue-600 font-bold"> Digital Inclusion:</span> Ensuring even the most marginalized communities are not left behind in the tech revolution.</li>
          <li><span className="text-blue-600 font-bold">Tech-Driven Development:</span> Building smart, scalable solutions that address real-world challenges such as unemployment, education gaps, and inefficient systems.</li>
          <li><span className="text-blue-600 font-bold">African Innovation,</span> Global Reach: Creating a proudly African brand that competes and collaborates on a global scale, representing the untapped brilliance of our continent.</li>
        </ul>
      ),
    },


    {
      title: 'Our Mission',
      content:
        'To provide affordable, reliable, and impactful tech solutions that address real community needs, support small businesses, and nurture the next generation of African digital talent.At Matsysol, our mission is action-oriented and community-driven. We are committed to:',
      image: '/src/assets/images/mission.jpg',
      article: 
      (
        
        <ul className="list-disc list-inside text-gray-200">
          <li><span className= "text-blue-600 font-bold" >Delivering IT Support & Solutions: </span>From day-to-day technical support to the development of software and digital systems tailored for local needs.</li>
          <li><span className= "text-blue-600 font-bold" >Training and Upskilling Youth: </span>Offering skills development programs that equip young people with in-demand digital competencies.</li>
          <li><span className= "text-blue-600 font-bold" >Collaborating with Communities: </span>Working alongside schools, NGOs, small businesses, and governments to co-create solutions that matter</li>
          <li><span className= "text-blue-600 font-bold" >Fostering Entrepreneurship: </span>Supporting local innovators and freelancers through digital platforms and mentorship, helping them grow their own tech-driven enterprises.</li>
          <li><span className= "text-blue-600 font-bold" >Promoting Sustainable Tech: </span>Incorporating eco-friendly practices in the design and deployment of our services and products.</li>
        </ul>
      ),
    },
    {
        title: 'Why us?',
        content:
          'Matsysol is a dynamic and innovative tech solutions provider dedicated to empowering communities through smart, sustainable, and accessible digital technology. Rooted in African excellence, we aim to close the digital divide by offering tailored IT support, software solutions, and tech-driven services that uplift individuals, startups, and organizations across the continent.',
          image: '/src/assets/images/aim.jpg',
          article: (
            <ul className="list-disc list-inside text-gray-200">
              <li><span className="text-blue-600 font-bold"> People First: </span>We are committed to serving our communities with integrity, understanding, and care.</li>
              <li><span className="text-blue-600 font-bold"> Innovative and Sustainable: </span>Our solutions are designed to be future-focused, environmentally conscious, and tailored for long-term impact.</li>
              <li><span className="text-blue-600 font-bold"> Affordable and Accessible: </span> We believe tech should be for everyone. Our pricing models and solutions reflect that belief.</li>
              <li><span className="text-blue-600 font-bold"> Local Roots, Global Standards: </span> While proudly African, our work meets global tech standards, giving our clients the best of both worlds.</li>
              <li><span className="text-blue-600 font-bold"> Empowerment through Skills:  </span>We don’t just deliver services — we uplift. Through training and development, we build tech capacity from the ground up.</li>
            </ul>
          ),
       },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [sections.length]);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage: "url('/src/assets/images/aboutUs.jpg')", // 
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Content on top of background */}
      <div className="relative z-10 p-6 md:p-10 lg:p-16 space-y-8">
        <div className="bg-transparent bg-opacity-90 p-6 md:p-10 rounded-lg shadow space-y-8">
          <h1 className="text-3xl font-bold text-center text-white">About Us</h1>

          {/* Sliding Section */}
          <section className="relative overflow-hidden w-full">
            <div
              className="flex transition-transform duration-[2000ms] ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / sections.length)}%)`,
                width: `${sections.length * 100}%`,
              }}
            >
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 px-4"
                  style={{ width: `${100 / sections.length}%` }}
                >
                  {/* Image */}
                  <div className="flex-1">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-64 object-cover rounded shadow"
                    />
                  </div>

                  {/* Text and Article */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4 text-gray-200">{section.title}</h2>
                    <p className="text-gray-200 mb-4">{section.content}</p>
                    <article className="text-gray-200 leading-relaxed">
                      {section.article}
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
