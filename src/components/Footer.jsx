import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Globe size={32} className="text-emerald-400" />
              <span className="ml-2 text-xl font-bold">NetSphere</span>
            </div>
            <p className="text-gray-400 mb-6">
              Innovative networking solutions that empower businesses to grow.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail size={18} className="text-emerald-400 mr-2" />
                <a href="mailto:info@NetSphere.com" className="text-gray-400 hover:text-emerald-400">info@NetSphere.com</a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-emerald-400 mr-2" />
                <a href="tel:+14085551234" className="text-gray-400 hover:text-emerald-400">+91 9080345946</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-md text-gray-900 bg-white"
              />
              <button
                type="submit"
                className="bg-emerald-600 text-white px-4 py-2 rounded-r-md hover:bg-emerald-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center md:text-left">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2025 NetSphere. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
