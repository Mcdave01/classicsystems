import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { CheckCircle, Users, Award, Clock, Globe, BookOpen } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 h-[400px] text-white py-20">
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-2xl text-gray-300 mb-8">
              Empowering businesses with innovative technology solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Company Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-6">
              Classic Systems Infotech is a premier IT solutions provider based in Ile-Ife, Osun State. 
              Founded in 2010, we've grown from a small startup to a trusted technology partner for 
              businesses across Nigeria and beyond.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our team of experts specializes in web development, mobile applications, cloud solutions, 
              IT consulting, and digital marketing. We combine technical expertise with industry knowledge 
              to deliver solutions that drive business growth and operational efficiency.
            </p>
            <p className="text-lg text-gray-700">
              At Classic Systems, we believe technology should simplify business processes, not complicate them. 
              That's why we focus on creating user-friendly, scalable solutions tailored to each client's 
              unique needs and objectives.
            </p>
          </div>
          
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h3>
              <p className="text-gray-700">
                To empower businesses through innovative technology solutions that solve real-world 
                problems, enhance productivity, and drive sustainable growth. We strive to be a trusted 
                partner in our clients' digital transformation journey, delivering excellence through 
                every line of code and every strategic recommendation.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading technology solutions provider in Africa, recognized for our innovation, 
                quality, and client-centered approach. We aim to create a digital ecosystem where businesses 
                of all sizes can leverage technology to achieve their full potential and compete in the 
                global marketplace.
              </p>
            </div>
          </div>
          
          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-700">
                  We are committed to delivering top-quality solutions that exceed client expectations.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                <p className="text-gray-700">
                  We believe in the power of teamwork, both within our organization and with our clients.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-700">
                  We constantly explore new technologies and approaches to solve complex business challenges.
                </p>
              </div>
            </div>
          </div>
          
          Team Showcase
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 relative">
                  <div className="w-full h-full bg-gray-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gray-400"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">John Doe</h3>
                  <p className="text-blue-600 mb-4">Chief Executive Officer</p>
                  <p className="text-gray-700 mb-4">
                    With over 15 years of experience in technology management, John leads our company with vision and expertise.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 relative">
                  <div className="w-full h-full bg-gray-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gray-400"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Jane Smith</h3>
                  <p className="text-blue-600 mb-4">Chief Technology Officer</p>
                  <p className="text-gray-700 mb-4">
                    Jane oversees our technology strategy and ensures we stay at the cutting edge of innovation.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 relative">
                  <div className="w-full h-full bg-gray-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gray-400"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Michael Johnson</h3>
                  <p className="text-blue-600 mb-4">Chief Operating Officer</p>
                  <p className="text-gray-700 mb-4">
                    Michael ensures smooth operations and efficient delivery of our services to clients worldwide.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="bg-gray-50 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">200+</p>
                <p className="text-gray-700">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">50+</p>
                <p className="text-gray-700">Happy Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">15+</p>
                <p className="text-gray-700">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">25+</p>
                <p className="text-gray-700">Expert Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with Classic Systems Infotech for innovative technology solutions tailored to your needs.
          </p>
          <div>
            <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}