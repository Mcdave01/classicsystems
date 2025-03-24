import React from "react";
import Link from "next/link";
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Classic Systems Infotech</h3>
            <p className="mb-4 text-gray-400">
              Providing innovative IT solutions and services to help businesses transform and thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/About" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/Services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/Services" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="https://wa.me/+2347035655588?text=I'm%20interested%20in%20your%services%20pls%20I%20wish%20to%20make%20some%20inquiry." className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
          
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/TrainingCourses" className="text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/TrainingCourses" className="text-gray-400 hover:text-white transition-colors">Mobile Applications</Link></li>
              <li><Link href="/TrainingCourses" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</Link></li>
              <li><Link href="https://wa.me/+2347035655588?text=I'm%20interested%20in%20your%services%20pls%20I%20wish%20to%20make%20some%20inquiry." className="text-gray-400 hover:text-white transition-colors">IT Consulting</Link></li>
              <li><Link href="/TrainingCourses" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-gray-400 mt-1" />
                <span className="text-gray-400">No 39 Mayfair, Ile-Ife<br />Osun State, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gray-400" />
                <a href="tel:+234 805 362 8635" className="text-gray-400 hover:text-white transition-colors">+234 805 362 8635</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gray-400" />
                <a href="mailto:info@classicsystemsinfotech.ng" className="text-gray-400 hover:text-white transition-colors">info@classicsystemsinfotech.ng</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>
        
        {/* Copyright and Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Classic Systems Infotech. All Rights Reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-400 hover:text-white mx-3 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white mx-3 transition-colors">Terms of Service</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white mx-3 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}




