import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 pt-32 sm:pt-4 transform transition-all duration-700 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Connect Your Business <br className="hidden sm:block" />
              <span className="text-emerald-400">To The Future</span>
            </h1>

            <p
              className={`text-emerald-100 text-lg sm:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 transform transition-all duration-700 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Build resilient, high-performance network infrastructure that
              scales with your business needs and keeps you ahead of the
              competition.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transform transition-all duration-700 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <button className="px-8 py-4 rounded-md bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-all duration-200 transform hover:-translate-y-1">
                Get Started
              </button>
              <button className="px-8 py-4 rounded-md border border-white text-white font-medium hover:bg-white hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
                Learn More
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
          <div
            className={`w-full lg:w-1/2 mt-12 lg:mt-0 relative hidden sm:block rounded-2xl transform transition-all duration-700 ${
              animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <img
              src="/img.jpg"
              alt="Earth"
              className="w-175 h-125 object-cover rounded-4xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
