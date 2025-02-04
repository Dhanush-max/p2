import React, { useEffect, useRef } from 'react';

const ContactForm = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    const elements = elementsRef.current;
    elements.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach(element => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <form
      noValidate
      data-status="init"
      className="sm:mx-24 p-6 bg-white"
    >
      <div className='fade-in space-y-6 mb-6'>
      {/* Subject Section */}
      <div ref={el => elementsRef.current[0] = el}>
        <p className="text-2xl font-semibold mb-4">CHOOSE SUBJECT</p>
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-sm text-gray-800 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
          >
            Production of spare parts
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-sm text-gray-800 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
          >
            Production of composite elements for aircraft
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-sm text-gray-800 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
          >
            Cutting plotter
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-sm text-gray-800 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
          >
            CNC milling
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-sm text-gray-800 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
          >
            Design and technology services
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-sm text-gray-800 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
          >
            Other
          </button>
        </div>
      </div>

      {/* Contact Information */}
      <div ref={el => elementsRef.current[1] = el} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <input
            type="text"
            placeholder="Name*"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:outline-none"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email*"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:outline-none"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Message */}
      <div ref={el => elementsRef.current[2] = el}>
        <textarea
          rows="4"
          placeholder="Message*"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:outline-none"
        ></textarea>
      </div>
      </div>

      <div ref={el => elementsRef.current[3] = el}>
        <button
          type="submit"
          className="font-bold text-lg bg-black text-white py-3 px-10 border border-black text-center inline-block hover:bg-white hover:text-black transition duration-300 rounded-none fade-in-button"
        >
          SEND ENQUIRY
        </button>
      </div>
    </form>
  );
};

export default ContactForm;