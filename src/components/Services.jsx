import React from 'react';
import { Wifi, Server, ShieldCheck, Laptop, Cloud, ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 group">
    <div className="w-14 h-14 rounded-lg bg-emerald-100 flex items-center justify-center mb-5 text-emerald-600 transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a
      href="#"
      className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800 transition-colors"
      aria-label={`Learn more about ${title}`}
    >
      Learn more <ArrowRight size={16} className="ml-1" />
    </a>
  </div>
);

const services = [
  {
    icon: <Wifi size={28} />,
    title: "Wireless Solutions",
    description: "High-performance WiFi networks designed for optimal coverage and reliability across your facilities."
  },
  {
    icon: <Server size={28} />,
    title: "Network Infrastructure",
    description: "End-to-end network design, deployment, and management services for businesses of all sizes."
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Security Services",
    description: "Comprehensive security solutions to protect your network from internal and external threats."
  },
  {
    icon: <Cloud size={28} />,
    title: "Cloud Connectivity",
    description: "Secure and reliable connections to cloud services with optimized performance and redundancy."
  },
  {
    icon: <Laptop size={28} />,
    title: "Remote Access",
    description: "Secure remote access solutions for your workforce with seamless connectivity from anywhere."
  },
  {
    icon: <Server size={28} strokeWidth={1.5} />,
    title: "Managed Services",
    description: "24/7 monitoring and management of your network infrastructure by our expert team."
  }
];

const Services = () => (
  <section id="services" className="py-24 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Networking Solutions</h2>
        <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600">
          We provide comprehensive networking solutions tailored to your business needs,
          ensuring optimal performance, security, and reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;