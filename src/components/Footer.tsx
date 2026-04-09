import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 font-outfit">Ishant's Study Point</h3>
            <p className="text-blue-100 mb-6">
              Empowering students with personalized home tuition and mentoring to achieve their highest potential.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm font-semibold">
                IG
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm font-semibold">
                FB
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm font-semibold">
                X
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-blue-100 hover:text-white transition-colors">About Ishant</Link></li>
              <li><Link to="/services" className="text-blue-100 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/testimonials" className="text-blue-100 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/philosophy" className="text-blue-100 hover:text-white transition-colors">Philosophy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-trust-green flex-shrink-0" size={20} />
                <span className="text-blue-100">Jaipur, Rajasthan, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-trust-green flex-shrink-0" size={20} />
                <span className="text-blue-100">+91 90011 50080</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-trust-green flex-shrink-0" size={20} />
                <span className="text-blue-100">contact@ishantstudypoint.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ishant's Study Point. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-blue-200">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
