import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content:
      "NetSphere transformed our outdated infrastructure into a high-performance network that supports our growing demands. Their team was professional, knowledgeable, and delivered on time and within budget.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "Pinnacle Innovations",
  },
  {
    content:
      "Since partnering with NetSphere, our network uptime has improved to 99.9%. Their preventative maintenance and rapid response times have significantly reduced our operational disruptions.",
    author: "Michael Chen",
    position: "IT Director",
    company: "Global Retail Solutions",
  },
  {
    content:
      "The security solutions implemented by NetSphere have given us peace of mind. Their team consistently goes above and beyond to ensure our data and networks are protected.",
    author: "Alexis Rodriguez",
    position: "Security Officer",
    company: "Secure Financial Group",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const delay = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, delay);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-black relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          What Our Clients Say
        </h2>
        <div className="w-20 h-1 bg-emerald-400 mx-auto mb-6"></div>
        <p className="text-lg text-gray-300 mb-12">
          Don't just take our word for it. Here's what our clients have to say about our networking solutions.
        </p>

        <div className="relative h-[300px] sm:h-[260px] transition-all duration-700">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
              <div className="bg-gray-900 rounded-xl shadow-xl px-6 py-10 flex flex-col items-center">
                <Quote className="w-8 h-8 text-emerald-400 mb-4" />
                <p className="text-gray-300 text-base mb-6">{t.content}</p>
                <div className="mt-auto">
                  <h4 className="text-lg font-semibold text-white">{t.author}</h4>
                  <p className="text-gray-400 text-sm">
                    {t.position}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? 'bg-emerald-400' : 'bg-gray-500'
                } inline-block border-none focus:outline-none`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;