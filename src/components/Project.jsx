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
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          placeholder="blur"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link
          href={link}
          className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 transition-colors"
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
        "Professional security camera installations for homes and businesses with remote monitoring capabilities. We provide cutting-edge security solutions tailored to your specific needs.",
      image: cctv_proj,
      link: "/services/cctv",
      delay: "0",
    },
    {
      title: "3MTT Training in Nigeria",
      description:
        "Comprehensive technical training program delivered across Nigeria to build digital skills and capacity. Empowering professionals with hands-on, industry-relevant expertise.",
      image: p_3mtt,
      link: "/services/training",
      delay: "150",
    },
    {
      title: "SAED NYSC Osun Program",
      description:
        "Skill Acquisition and Entrepreneurship Development program at NYSC Osun Orientation Camp. Fostering entrepreneurship and practical skill development for youth.",
      image: Saed,
      link: "/projects/saed",
      delay: "300",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div
          className="text-center mb-12"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Highlighted Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Explore our portfolio of successful projects that demonstrate our 
            expertise, innovation, and commitment to excellence across various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              delay={project.delay}
            />
          ))}
        </div>

        <div
          className="text-center mt-12"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-offset="200"
        >
          <Link
            href="/projects"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition-colors text-lg font-medium"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;