import React from "react";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-counseling-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-counseling-300" />
              <span className="font-serif font-bold text-xl text-white">PathwayGuide</span>
            </div>
            <p className="text-counseling-200 mb-6">
              Providing free expert guidance for your educational journey, from bachelor's to master's programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-counseling-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-counseling-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-counseling-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-counseling-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Programs Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programs#bca" className="text-counseling-200 hover:text-white transition-colors">
                  BCA Guidance
                </Link>
              </li>
              <li>
                <Link to="/programs#btech" className="text-counseling-200 hover:text-white transition-colors">
                  BTech Counseling
                </Link>
              </li>
              <li>
                <Link to="/programs#mba" className="text-counseling-200 hover:text-white transition-colors">
                  MBA Advisory
                </Link>
              </li>
              <li>
                <Link to="/programs#pgdm" className="text-counseling-200 hover:text-white transition-colors">
                  PGDM Consultation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-counseling-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-counseling-200 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-counseling-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#testimonials" className="text-counseling-200 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contact Us</h3>
            <div className="flex items-center space-x-3 mb-3">
              <Mail className="h-5 w-5 text-counseling-300" />
              <a href="mailto:karanj96108@gmail.com" className="text-counseling-200 hover:text-white transition-colors">
                karanj96108@gmail.com
              </a>
            </div>
            <p className="text-counseling-300">
              Jagat farm, <br />
              Greater noida
            </p>
          </div>
        </div>
        
        <div className="border-t border-counseling-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-counseling-300 text-sm">
              © {currentYear} PathwayGuide. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-counseling-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-counseling-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-counseling-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
