import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faProjectDiagram, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'; // Import the necessary icons
import Cards from '@/utility_items/Cards'
function CardContents() {
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

    return (
      <div className="flex flex-wrap justify-center gap-4">
        <Cards>
        {services.map((service, index) => (
          <div key={index} className="py-4 border rounded shadow-md w-64">
            <FontAwesomeIcon icon={services.icon} className="text-3xl mb-[100px] text-blue-500" />
            <div className="text-1xl font-bold py-10">{service.title}</div>
            <div>{service.description}</div>
          </div>
        ))}
        </Cards>
      </div>
    );
}

export default CardContents;
