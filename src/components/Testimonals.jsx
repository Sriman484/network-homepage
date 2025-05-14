import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "NetSphere transformed our outdated infrastructure into a high-performance network that supports our growing demands. Their team was professional, knowledgeable, and delivered on time and within budget.",
      author: "Sarah Johnson",
      position: "CTO",
      company: "Pinnacle Innovations",
    },
    {
      content: "Since partnering with NetSphere, our network uptime has improved to 99.9%. Their preventative maintenance and rapid response times have significantly reduced our operational disruptions.",
      author: "Michael Chen",
      position: "IT Director",
      company: "Global Retail Solutions",
    },
    {
      content: "The security solutions implemented by NetSphere have given us peace of mind. Their team consistently goes above and beyond to ensure our data and networks are protected.",
      author: "Alexis Rodriguez",
      position: "Security Officer",
      company: "Secure Financial Group",
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Don't just take our word for it. Here's what our clients have to say about our networking solutions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 rounded-xl shadow-xl flex-1 px-6 py-10 text-center flex flex-col items-center">
              <Quote className="w-8 h-8 text-emerald-400 mb-4" />
              <p className="text-gray-300 text-base mb-6">{testimonial.content}</p>
              <div className="mt-auto">
                <h4 className="text-lg font-semibold text-white">{testimonial.author}</h4>
                <p className="text-gray-400 text-sm">
                  {testimonial.position}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;