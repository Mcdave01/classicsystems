import Image from "next/image";
import Link from "next/link";

// Import images from src/assets
import cctv_proj from "@/asset/cctv_proj.jpg";
import p_3mtt from "@/asset/p_3mtt.jpg";

import Saed from "@/asset/Saed.jpg";

const ProjectCard = ({ title, description, image, link, delay }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 w-full max-w-sm"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="800"
    >
      <div className="relative h-64 w-full">
        <Image
          src={image} // Using the imported image here
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={link}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

const Project = () => {
  const projects = [
    {
      title: "CCTV Installation",
      description:
        "Professional security camera installations for homes and businesses with remote monitoring capabilities.",
      image: cctv_proj, // Use the imported image
      link: "#",
      delay: "0",
    },
    {
      title: "3MTT Training in Nigeria",
      description:
        "Comprehensive technical training program delivered across Nigeria to build digital skills and capacity.",
      image: p_3mtt, // Use the imported image
      link: "#",
      delay: "150",
    },
    {
      title: "SAED NYSC Osun Program",
      description:
        "Skill Acquisition and Entrepreneurship Development program at NYSC Osun Orientation Camp.",
      image: Saed, // Use the imported image
      link: "#",
      delay: "600",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div
          className="text-center mb-12"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our portfolio of successful projects that demonstrate our
            expertise and commitment to excellence.
          </p>
        </div>

        <div className="flex flex-wrap justify-around gap-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 flex justify-center"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image} // Pass the image prop
                link={project.link}
                delay={project.delay}
              />
            </div>
          ))}
        </div>

        <div
          className="text-center mt-12"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-offset="200"
        >
          <Link
            href="#"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;
