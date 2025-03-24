import React from "react";
import Link from "next/link";
import { Lightbulb, TrendingUp, Zap, BarChart, Target, Users } from "lucide-react";

const ConsultingCard = ({ title, description, icon: Icon, bgColor, textColor, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className={`h-2 ${bgColor}`}></div>
      <div className="p-6">
        <div className={`${bgColor} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
          <Icon className={`h-7 w-7 ${textColor}`} />
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
        <Link
          href={link}
          className={`flex items-center font-medium ${bgColor.replace('bg-', 'text-')} hover:underline`}
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const Consulting = () => {
  const services = [
    {
      title: "Digital Strategy",
      description: "Develop a comprehensive roadmap to leverage digital technologies for business growth and transformation.",
      icon: Lightbulb,
      bgColor: "bg-indigo-600",
      textColor: "text-white",
      link: "https://wa.me/+2347035655588?text=I'm%20interested%20in%20your%20Services%20pls%20I%20wish%20to%20make%20some%20inquiry.",
    },
    {
      title: "Business Process Optimization",
      description: "Streamline operations and enhance efficiency by identifying bottlenecks and implementing improved workflows.",
      icon: TrendingUp,
      bgColor: "bg-purple-600",
      textColor: "text-white",
      link: "https://wa.me/+2347035655588?text=I'm%20interested%20in%20your%20Services%20pls%20I%20wish%20to%20make%20some%20inquiry.",
    },
    {
      title: "Technology Assessment",
      description: "Evaluate your current technology stack and identify opportunities for improvement and modernization.",
      icon: Zap,
      bgColor: "bg-blue-600",
      textColor: "text-white",
      link: "https://wa.me/+2347035655588?text=I'm%20interested%20in%20your%20Services%20pls%20I%20wish%20to%20make%20some%20inquiry.",
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights to drive informed business decisions and strategy.",
      icon: BarChart,
      bgColor: "bg-green-600",
      textColor: "text-white",
      link: "https://wa.me/+2347035655588?text=I'm%20interested%20in%20your%20Services%20pls%20I%20wish%20to%20make%20some%20inquiry.",
    },
    {
      title: "Product Strategy",
      description: "Define a winning product roadmap that aligns with market needs and your business objectives.",
      icon: Target,
      bgColor: "bg-orange-600",
      textColor: "text-white",
      link: "https://wa.me/+2347035655588?text=I'm%20interested%20in%20your%20Services%20pls%20I%20wish%20to%20make%20some%20inquiry.",
    },
    {
      title: "Team Augmentation",
      description: "Enhance your existing team with our skilled professionals to accelerate project delivery.",
      icon: Users,
      bgColor: "bg-red-600",
      textColor: "text-white",
      link: "https://wa.me/+2347035655588?text=I'm%20interested%20in%20your%20Services%20pls%20I%20wish%20to%20make%20some%20inquiry.",
                
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Consulting Services</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Expert guidance to help you navigate complex challenges and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
          {services.map((service, index) => (
            <ConsultingCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              bgColor={service.bgColor}
              textColor={service.textColor}
              link={service.link}
            />
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="200">
          <Link
            href="https://wa.me/+2347035655588?text=I'm%20interested%20in%20your%20Services%20pls%20I%20wish%20to%20make%20some%20inquiry."
            target="blank"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-lg font-medium"
          >
            Schedule a Consultation Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Consulting;