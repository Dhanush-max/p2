import React, { useEffect, useRef } from 'react';

const ContactInfo = () => {
  const contactRef = useRef(null);
  const addressRef = useRef(null);
  const mapRef = useRef(null);
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
    <div className="bg-black text-gray-400 ">
      <div className="mx-10 sm:mx-28 mx-auto space-y-16 py-16">
        {/* Contact Section */}
        <div  className="fade-in">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-4 mb-8">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div ref={el => elementsRef.current[0] = el} className="space-y-4 fade-in">
              <p className="text-lg">Phone:</p>
              <p className="font-light text-xl">+91 96896 11616</p>
            </div>
            <div ref={el => elementsRef.current[0] = el} className="space-y-4 fade-in-right">
              <p className="text-lg">Email:</p>
              <p className="font-light text-xl">composite@peridotam.in</p>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div ref={el => elementsRef.current[1] = el} className="fade-in">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-4 mb-8">Address</h2>
          <address className="not-italic space-y-2 text-lg">
            <p>PERIDOT ADVANCED MATERIALS PVT LTD</p>
            <p>NO 59/4, HESARAGHATTA HOBLI</p>
            <p>SASIVEGHATTA, BENGALURU</p>
            <p>KARNATAKA - 560107</p>
          </address>
        </div>
        <div className="overflow-hidden rounded-xl border border-gray-700">
        </div>
      </div>
      {/* Map Section */}
      <h2 ref={el => elementsRef.current[2] = el} className="text-2xl ml-10 sm:ml-20 font-semibold border-b border-gray-700 pb-4 mb-8 fade-in">How to Find Us</h2>
      <div ref={el => elementsRef.current[3] = el} className='relative w-full min-h-[300px] shadow-inner'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.063645750959!2d77.48080057507859!3d13.095152887231652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA1JzQyLjYiTiA3N8KwMjknMDAuMiJF!5e0!3m2!1sen!2sin!4v1738604417284!5m2!1sen!2sin"
          width="100%"
          height="100vh"
          allowFullScreen=""
          loading="lazy"
          className="w-full h-[70vh] border-0">
        </iframe>
      </div>
    </div>
  );
};

export default ContactInfo;