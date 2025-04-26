import  { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const elementsRef = useRef([]);
  const formRef = useRef(null);
  const [status, setStatus] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(''); // State for selected subject

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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
      formRef.current,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS Public Key
    )
    .then((result) => {
      setStatus('Message sent successfully!');
      formRef.current.reset(); // Reset the form
      setSelectedSubject(''); // Reset the selected subject
    })
    .catch((error) => {
      setStatus('Failed to send message. Please try again.');
    });
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
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
              onClick={() => setSelectedSubject('Production of spare parts')}
              className={`px-4 py-2 text-sm rounded-lg focus:outline-none focus:ring focus:ring-gray-400 ${
                selectedSubject === 'Production of spare parts'
                  ? 'bg-gray-400 text-gray-900'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Production of spare parts
            </button>
            <button
              type="button"
              onClick={() => setSelectedSubject('Production of composite elements for aircraft')}
              className={`px-4 py-2 text-sm rounded-lg focus:outline-none focus:ring focus:ring-gray-400 ${
                selectedSubject === 'Production of composite elements for aircraft'
                  ? 'bg-gray-400 text-gray-900'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Production of composite elements for aircraft
            </button>
            {/* Add more buttons as needed */}
          </div>
        </div>

        {/* Hidden Input for Selected Subject */}
        <input
          type="hidden"
          name="subject"
          value={selectedSubject}
        />

        {/* Contact Information */}
        <div ref={el => elementsRef.current[1] = el} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <input
              type="text"
              name="user_name"
              placeholder="Name*"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              name="user_email"
              placeholder="Email*"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="tel"
              name="user_phone"
              placeholder="Phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Message */}
        <div ref={el => elementsRef.current[2] = el}>
          <textarea
            name="message"
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

      {/* Status Message */}
      {status && <p className="mt-4 text-center text-lg">{status}</p>}
    </form>
  );
};

export default ContactForm;