import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Get In Touch</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Ready to elevate your network infrastructure? Contact us today to schedule a consultation.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-10 max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Send Us a Message
          </h3>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Your First Name"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Your Last Name"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="user@example.com"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                placeholder="Your Company"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Any additional information you would like to provide..."
                className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm resize-none focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;