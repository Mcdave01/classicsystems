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
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with Classic Systems Infotech for innovative technology solutions tailored to your needs.
          </p>
          <div>
            <a href="/Contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}