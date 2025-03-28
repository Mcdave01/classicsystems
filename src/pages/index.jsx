import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import Cards from '@/utility_items/Cards';
import Project from '@/components/Project';
import Training from '@/components/Training';
import AdvertsSection from '@/components/AdvertsSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faMobileAlt, faPrint, faProjectDiagram, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import '@/app/globals.css';
import AosInit from "@/app/aos";
import Consulting from '@/components/Consulting';

const services = [
  {
    title: "Digital Skills Training",
    description: "Ready to level up your career in technology? Our comprehensive Tech Training Program covers the most in-demand skills.",
    icon: faLaptop
  },
  {
    title: "Projects & Installations",
    description: "Professional installation and project management services for IT infrastructure, network setup, CCTV installations, and more.",
    icon: faProjectDiagram
  },
  {
    title: "Corporate Training",
    description: "Tailored training programs for businesses in areas like IT skills, software use, cybersecurity, and more to boost team efficiency.",
    icon: faChalkboardTeacher
  }
];

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="mt-[50px]"> {/* Reduced top padding to match NavBar height */}
        <Hero />
        <AosInit />
        
        {/* Service Section with Heading */}
        <div className="px-4 py-12">
          {/* Service Heading */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              We provide top-quality technology solutions tailored to meet your specific needs
            </p>
          </div>
          
          {/* Service Cards - Fixed layout issues */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4" data-aos="zoom-in">
            {services.map((service, index) => (
              <Cards 
                key={index} 
                className="card flex flex-col items-center 
                justify-evenly bg-gray-100 text-center 
                rounded shadow-md p-6 transition-transform
                duration-300 hover:scale-105 hover:bg-blue-100 h-full"
              >
                <FontAwesomeIcon icon={service.icon} className="text-4xl mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </Cards>
            ))}
          </div>
        </div>
        
        <Project />
        <Training/>
        <Consulting />
        <AdvertsSection />
        <Footer />
      </main>
    </>
  );
}