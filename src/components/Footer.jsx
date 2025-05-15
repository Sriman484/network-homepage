import React from "react";
import { Mail, Phone, Globe } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-5">
              <Globe size={36} className="text-emerald-400" />
              <span className="ml-3 text-2xl font-bold tracking-wide">NetSphere</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Innovative networking solutions that empower businesses to grow.
            </p>
            <div className="space-y-3 text-gray-400">
              <ContactItem icon={<Mail size={20} className="text-emerald-400" />} href="mailto:info@netsphere.com" label="info@netsphere.com" />
              <ContactItem icon={<Phone size={20} className="text-emerald-400" />} href="tel:+919080345946" label="+91 90803 45946" />
            </div>
          </div>
          <nav>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              {["About Us", "Services", "Contact", "Careers"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                    className="hover:text-emerald-400 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="text-xl font-semibold mb-5">Stay Connected</h3>
            <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white"
                required
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 transition-colors text-white px-5 py-2 rounded-r-md font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm space-y-4 md:space-y-0">
          <p>&copy; 2025 NetSphere. All rights reserved.</p>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-emerald-400 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const ContactItem = ({ icon, href, label }) => (
  <div className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition">
    {icon}
    <a href={href}>{label}</a>
  </div>
);

export default Footer;