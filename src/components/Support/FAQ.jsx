import React from 'react';

const FAQ = () => {
  const faqs = [
    { question: 'What services do you offer?', answer: 'We offer web development, mobile app development, and more.' },
    { question: 'How can I contact support?', answer: 'You can contact support via email or phone.' },
    { question: 'Where are you located?', answer: 'We are located at 123 Digital Street, Tech City.' },
  ];

  return (
    <div className="p-6 bg-gray-100 ">
       <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-bold text-gray-800">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;