import React from 'react';
import { Shield, Clock, Users, Award } from 'lucide-react';

const StatCard = ({ icon, value, label }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-3 text-emerald-600">
      {icon}
    </div>
    <div className="text-3xl font-bold text-gray-800 mb-1">{value}</div>
    <div className="text-sm text-gray-600 uppercase tracking-wider">{label}</div>
  </div>
);

const stats = [
  { icon: <Shield size={24} />, value: "99.9%", label: "Network Uptime" },
  { icon: <Clock size={24} />, value: "15+", label: "Years Experience" },
  { icon: <Users size={24} />, value: "500+", label: "Business Clients" },
  { icon: <Award size={24} />, value: "24", label: "Industry Awards" }
];

const About = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Engineers working in a server room"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Why Choose NetSphere For Your Network Solutions
          </h2>

          <p className="text-gray-600 mb-6">
            With over 15 years of industry experience, NetSphere has established itself as a leader in providing comprehensive networking solutions to businesses of all sizes.
          </p>

          <p className="text-gray-600 mb-8">
            Our team of certified network engineers designs, implements, and manages network infrastructure that ensures optimal performance, security, and reliability. We take pride in our customer-centric approach, focusing on understanding your unique business needs and delivering tailored solutions.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
          <button className="px-8 py-3 rounded-md bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition duration-200">
            Learn More About Us
          </button>

        </div>

      </div>
    </div>
  </section>
);

export default About;
