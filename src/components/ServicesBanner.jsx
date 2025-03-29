import React from "react";

const ServicesBanner = () => {
  return (
    <div className="relative bg-gray-900 h-[400px] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
            Our Services
          </h1>
          <div className="bg-red-800 width-[400px] h-[60px]"></div>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Comprehensive solutions tailored to help your business grow and succeed in the digital world
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;