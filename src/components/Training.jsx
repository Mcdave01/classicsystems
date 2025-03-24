import React from "react";
import Link from "next/link";
import { Shield, Smartphone, Database, Monitor, Layers, PenTool } from "lucide-react";

const CourseCard = ({ title, description, iconComponent, color, link, delay }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden border-t-4 ${color} transition-transform duration-300 hover:shadow-xl hover:-translate-y-2`}
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="800"
    >
      <div className="p-6">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${color.replace('border', 'bg')}`}>
          {iconComponent}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={link}
          className={`inline-block px-4 py-2 rounded text-white ${color.replace('border', 'bg')} hover:opacity-90 transition-opacity`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

const Training = () => {
  const courses = [
    {
      title: "Cyber Security",
      description: "Learn to protect systems, networks, and programs from digital attacks. Covers security fundamentals, ethical hacking, and threat analysis.",
      iconComponent: <Shield className="h-8 w-8 text-white" />,
      color: "border-blue-600",
      link: "/TrainingCourses",
      delay: "0"
    },
    {
      title: "Mobile App Development",
      description: "Master the creation of applications for iOS and Android platforms using React Native, Flutter, and native development approaches.",
      iconComponent: <Smartphone className="h-8 w-8 text-white" />,
      color: "border-blue-600",
      link: "/TrainingCourses",
      delay: "100"
    },
    {
      title: "Data Science",
      description: "Explore data analysis, visualization, machine learning, and AI to extract valuable insights and make data-driven decisions.",
      iconComponent: <Database className="h-8 w-8 text-white" />,
      color: "border-blue-600",
      link: "/TrainingCourses",
      delay: "200"
    },
    {
      title: "Digital Literacy",
      description: "Develop essential computer skills, internet navigation, online safety, and productivity tools for the modern digital workplace.",
      iconComponent: <Monitor className="h-8 w-8 text-white" />,
      color: "border-blue-600",
      link: "/TrainingCourses",
      delay: "300"
    },
    {
      title: "UI/UX Design",
      description: "Create intuitive user interfaces and meaningful experiences through user research, wireframing, prototyping, and usability testing.",
      iconComponent: <Layers className="h-8 w-8 text-white" />,
      color: "border-blue-600",
      link: "/TrainingCourses",
      delay: "400"
    },
    {
      title: "Graphics Design",
      description: "Learn visual communication principles and design techniques using industry-standard tools like Photoshop, Illustrator, and more.",
      iconComponent: <PenTool className="h-8 w-8 text-white" />,
      color: "border-blue-600",
      link: "/TrainingCourses",
      delay: "500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12" data-aos="fade-down" data-aos-duration="1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Training Courses</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Enhance your skills with our comprehensive training programs designed by industry experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              iconComponent={course.iconComponent}
              color={course.color}
              link={course.link}
              delay={course.delay}
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
            href="/TrainingCourses"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Training;