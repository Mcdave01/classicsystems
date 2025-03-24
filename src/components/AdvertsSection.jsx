import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Award, Percent, Zap } from "lucide-react";

const AdvertCard = ({ title, description, image, badge, discount, expiryDate, link }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white">
      {/* Ad Image */}
      <div className="h-48 overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      
      {/* Badge (if provided) */}
      {badge && (
        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs uppercase font-semibold px-3 py-1 rounded-full">
          {badge}
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap items-center mb-4 gap-4">
          {/* Discount (if provided) */}
          {discount && (
            <div className="flex items-center text-green-600">
              <Percent className="h-4 w-4 mr-1" />
              <span className="font-semibold">{discount}% OFF</span>
            </div>
          )}
          
          {/* Expiry date (if provided) */}
          {expiryDate && (
            <div className="flex items-center text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>Ends {expiryDate}</span>
            </div>
          )}
        </div>
        
        <Link 
          href={link}
          className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors"
        >
          Learn More
          <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

const FeaturedAd = ({ title, subtitle, description, image, features, ctaText, ctaLink }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg overflow-hidden shadow-xl">
      <div className="flex flex-col md:flex-row">
        {/* Image section */}
        <div className="md:w-1/2 h-64 md:h-auto">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
        
        {/* Content section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <span className="text-blue-200 text-sm uppercase font-semibold tracking-wider mb-1">
            {subtitle}
          </span>
          <h2 className="text-white text-3xl font-bold mb-4">{title}</h2>
          <p className="text-blue-100 mb-6">{description}</p>
          
          {/* Features list */}
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Zap className="h-5 w-5 text-yellow-300 mr-2 mt-0.5" />
                <span className="text-white">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link 
            href={ctaLink}
            className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-medium transition-transform hover:-translate-y-1 hover:shadow-lg text-center"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
};

const AdvertsSection = () => {
  // Featured advertisement data
  const featuredAd = {
    title: "Summer Coding Bootcamp",
    subtitle: "Limited Time Offer",
    description: "Accelerate your career with our intensive 8-week coding bootcamp. Master the latest technologies with expert instructors.",
    image: "https://placehold.co/800x600/007bff/ffffff?text=Summer+Bootcamp",
    features: [
      "Hands-on project-based learning",
      "Industry-recognized certification",
      "Job placement assistance",
      "1-on-1 mentorship sessions"
    ],
    ctaText: "Reserve Your Spot",
    ctaLink: "https://wa.me/+2347035655588?text=I'm%20interested%20in%20your%20Summer%20coding%20pls%20I%20wish%20to%20make%20some%20inquiry.",
  };

  // Regular advertisements data
  const adverts = [
    {
      title: "Early Bird Discount",
      description: "Sign up for any course this month and get 25% off the regular price. Limited spots available.",
      image: "https://placehold.co/400x300/20c997/ffffff?text=Early+Bird",
      badge: "Special Offer",
      discount: 25,
      expiryDate: "April 30",
      link: "https://wa.me/+2347035655588?text=I'm%20interested%20in%20your%20Services%20pls%20I%20wish%20to%20make%20some%20inquiry.",
    },
    {
      title: "Group Training Package",
      description: "Enroll 3 or more team members and get special corporate rates plus customized curriculum.",
      image: "https://placehold.co/400x300/6f42c1/ffffff?text=Group+Training",
      badge: "Corporate",
      discount: null,
      expiryDate: null,
      link: "https://wa.me/+2347035655588?text=I'm%20interested%20in%20your%20gorup%20training%20pls%20I%20wish%20to%20make%20some%20inquiry.",
    },
    {
      title: "Free Workshop Webinar",
      description: "Join our free 4-weeks workshop on cybersecurity fundamentals. Perfect for beginners.",
      image: "https://placehold.co/400x300/fd7e14/ffffff?text=Free+Workshop",
      badge: "Free",
      discount: null,
      expiryDate: "May 15",
      link: "https://wa.me/+2347035655588?text=I'm%20interested%20in%20your%20Workshop%20pls%20I%20wish%20to%20make%20some%20inquiry.",
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12" data-aos="fade-down" data-aos-duration="1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Special Offers</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Take advantage of our limited-time promotions and special offers on selected courses and programs.
          </p>
        </div>

        {/* Featured Advertisement */}
        <div className="mb-12" data-aos="fade-up" data-aos-duration="1000">
          <FeaturedAd {...featuredAd} />
        </div>

        {/* Regular Advertisements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          {adverts.map((advert, index) => (
            <AdvertCard key={index} {...advert} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12" data-aos="zoom-in" data-aos-duration="800">
          <Link
            href="https://wa.me/+2347035655588?text=I'm%20interested%20in%20your%20Services%20pls%20I%20wish%20to%20make%20some%20inquiry."
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
          >
            <Award className="mr-2 h-5 w-5" />
            View All Promotions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdvertsSection;