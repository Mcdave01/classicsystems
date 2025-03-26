import React from 'react';

function ContactHeader() {
  return (
    <div className="relative bg-gray-900 h-[400px] text-white py-20">
    <div className="container mx-auto px-6 py-10">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
          Contact Us
        </h1>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
        <p className="text-xl text-white/90 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          We are available 24/7 for Services....
        </p>
      </div>
    </div>
  </div>
  );
}

export default ContactHeader;

