import React from "react";
import Link from "next/link";
import { 
  Shield, 
  Smartphone, 
  Database, 
  Monitor, 
  Layers, 
  PenTool, 
  Code, 
  Server, 
  Cpu, 
  GitBranch, 
  Cloud, 
  Binary 
} from "lucide-react";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const CourseCard = ({ title, description, iconComponent, color, link, delay, duration, level, price }) => {
  // Create the WhatsApp link inside the component with the correct title
  const whatsappLink = `https://wa.me/+2347035655588?text=I'm%20interested%20in%20your%20${encodeURIComponent(title)}%20course.%20Please%20provide%20more%20information.`;
  
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
        
        <div className="flex flex-wrap justify-between mb-4 text-sm text-gray-500">
          <div className="mb-2 mr-4">
            <span className="font-medium">Duration:</span> {duration}
          </div>
          <div className="mb-2">
            <span className="font-medium">Level:</span> {level}
          </div>
        </div>
        
        {/* Use the whatsappLink created above or the link passed as prop */}
        <a
          href={link === "/training/whatsapp" ? whatsappLink : link}
          className={`inline-block px-4 py-2 rounded text-white ${color.replace('border', 'bg')} hover:opacity-90 transition-opacity`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

const TrainingCoursesBanner = () => {
  return (
    <div className="bg-gray-900 h-[400px] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
            Training Courses
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Enhance your skills with our comprehensive training programs designed by industry experts
          </p>
        </div>
      </div>
    </div>
  );
};

const CoursesFilter = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { name: "All Courses", value: "all" },
    { name: "Development", value: "development" },
    { name: "Security", value: "security" },
    { name: "Data", value: "data" },
    { name: "Design", value: "design" }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => setActiveFilter(filter.value)}
          className={`px-5 py-2 rounded-full transition-all duration-200 ${
            activeFilter === filter.value
              ? "bg-red-600 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};

const TrainingCourses = () => {
  const [activeFilter, setActiveFilter] = React.useState("all");

  const courses = [
    {
      title: "Cyber Security",
      description: "Learn to protect systems, networks, and programs from digital attacks. Covers security fundamentals, ethical hacking, and threat analysis.",
      iconComponent: <Shield className="h-8 w-8 text-white" />,
      color: "border-red-600",
      link: "/training/whatsapp", // Using a special value that will be replaced with WhatsApp link
      delay: "0",
      duration: "8 weeks",
      level: "Intermediate",
      category: "security"
    },
    {
      title: "Mobile App Development",
      description: "Master the creation of applications for iOS and Android platforms using React Native, Flutter, and native development approaches.",
      iconComponent: <Smartphone className="h-8 w-8 text-white" />,
      color: "border-red-600",
      link: "/training/whatsapp", // Using a special value that will be replaced with WhatsApp link
      delay: "100",
      duration: "10 weeks",
      level: "Intermediate",
      category: "development"
    },
    {
      title: "Data Science",
      description: "Explore data analysis, visualization, machine learning, and AI to extract valuable insights and make data-driven decisions.",
      iconComponent: <Database className="h-8 w-8 text-white" />,
      color: "border-red-600",
      link: "/training/whatsapp", // Using a special value that will be replaced with WhatsApp link
      delay: "200",
      duration: "12 weeks",
      level: "Advanced",
      category: "data"
    },
    {
      title: "Digital Literacy",
      description: "Develop essential computer skills, internet navigation, online safety, and productivity tools for the modern digital workplace.",
      iconComponent: <Monitor className="h-8 w-8 text-white" />,
      color: "border-red-600",
      link: "/training/whatsapp", // Using a special value that will be replaced with WhatsApp link
      delay: "300",
      duration: "8 weeks",
      level: "Beginner",
      category: "development"
    },
    {
      title: "UI/UX Design",
      description: "Create intuitive user interfaces and meaningful experiences through user research, wireframing, prototyping, and usability testing.",
      iconComponent: <Layers className="h-8 w-8 text-white" />,
      color: "border-red-600",
      link: "/training/whatsapp", // Using a special value that will be replaced with WhatsApp link
      delay: "400",
      duration: "8 weeks",
      level: "Intermediate",
      category: "design"
    },
    {
      title: "Graphics Design",
      description: "Learn visual communication principles and design techniques using industry-standard tools like Photoshop, Illustrator, and more.",
      iconComponent: <PenTool className="h-8 w-8 text-white" />,
      color: "border-red-600",
      link: "/training/whatsapp", // Using a special value that will be replaced with WhatsApp link
      delay: "500",
      duration: "8 weeks",
      level: "Intermediate",
      category: "design"
    },
    {
      title: "Web Development",
      description: "Build responsive and dynamic websites using modern frontend and backend technologies like HTML, CSS, JavaScript, React, and Node.js.",
      iconComponent: <Code className="h-8 w-8 text-white" />,
      color: "border-red-600",
      link: "/training/whatsapp", // Using a special value that will be replaced with WhatsApp link
      delay: "0",
      duration: "12 weeks",
      level: "Beginner to Intermediate",
      category: "development"
    },
    {
      title: "Backend Development",
      description: "Master server-side programming, APIs, databases, and cloud services to build robust and scalable application backends.",
      iconComponent: <Server className="h-8 w-8 text-white" />,
      color: "border-red-600",
      link: "/training/whatsapp",
      delay: "100",
      duration: "10 weeks",
      level: "Intermediate",
      category: "development"
    },
    {
      title: "Artificial Intelligence",
      description: "Explore the fundamentals of AI, machine learning algorithms, neural networks, and practical applications in various domains.",
      iconComponent: <Cpu className="h-8 w-8 text-white" />,
      color: "border-red-600",
      link:"/training/whatsapp",
      delay: "200",
      duration: "14 weeks",
      level: "Advanced",
      category: "data"
    },
    {
      title: "DevOps & CI/CD",
      description: "Learn the practices, tools, and philosophies for integrating development and operations to deliver high-quality software faster.",
      iconComponent: <GitBranch className="h-8 w-8 text-white" />,
      color: "border-red-600",
      link: "/training/whatsapp",
      delay: "300",
      duration: "8 weeks",
      level: "Intermediate to Advanced",
      category: "development"
    },
    {
      title: "Cloud Computing",
      description: "Master cloud platforms like AWS, Azure, and Google Cloud to deploy, manage, and scale applications in the cloud.",
      iconComponent: <Cloud className="h-8 w-8 text-white" />,
      color: "border-red-600",
      link: "/training/whatsapp",
      delay: "400",
      duration: "10 weeks",
      level: "Intermediate",
      category: "development"
    },
    {
      title: "Blockchain Development",
      description: "Learn the fundamentals of blockchain technology and how to develop decentralized applications (dApps) and smart contracts.",
      iconComponent: <Binary className="h-8 w-8 text-white" />,
      color: "border-red-600",
      link: "/training/blockchain",
      delay: "500",
      duration: "10 weeks",
      level: "Advanced",
      category: "development"
    }
  ];

  const filteredCourses = activeFilter === "all" 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  return (
    <>
      <NavBar />
      <TrainingCoursesBanner />
      
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-down" data-aos-duration="1000">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Available Courses</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Browse our comprehensive range of professional training courses designed to elevate your skills and advance your career
            </p>
          </div>

          <CoursesFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                iconComponent={course.iconComponent}
                color={course.color}
                link={course.link}
                delay={(index % 6) * 100}
                duration={course.duration}
                level={course.level}
                price={course.price}
              />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No courses found in this category. Please try another filter.</p>
            </div>
          )}

          <div className="mt-16 bg-blue-50 rounded-lg p-8 border border-blue-100" data-aos="fade-up">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Need Custom Training?</h3>
                <p className="text-gray-600 mb-4">
                  We offer tailored training programs for organizations and teams. Our experts can design custom courses to meet your specific needs and objectives.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>On-Site or remote options available</li>
                  <li>Flexible scheduling to accommodate your team</li>
                  <li>Focused on your specific industry challenges</li>
                  <li>Practical, hands-on learning experiences</li>
                </ul>
              </div>
              <div className="md:w-1/3 text-center">
                <Link 
                  href="https://wa.me/+2347035655588?text=I'm%20interested%20in%20your%20custom%20training%20options.%20Please%20provide%20more%20information."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-lg bg-red-600 text-white hover:bg-red-900/70 transition-colors text-lg font-medium"
                >
                  Request Custom Training.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose Our Training?</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center" data-aos="fade-up">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from industry professionals with years of real-world experience and proven teaching methods.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Practical Curriculum</h3>
              <p className="text-gray-600">
                Hands-on projects and real-world case studies ensure you can apply what you learn immediately.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Flexible Learning</h3>
              <p className="text-gray-600">
                Choose between in-person, remote, and hybrid learning options to fit your schedule and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Advance Your Skills?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100">
            Take the next step in your professional development journey with our industry-leading training courses.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/Contact"
              className="inline-block px-6 py-3 rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors text-lg font-medium"
            >
              Contact Us
            </Link>
            <Link 
              href="/TrainingCourses"
              className="inline-block px-6 py-3 rounded-lg bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors text-lg font-medium"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default TrainingCourses;