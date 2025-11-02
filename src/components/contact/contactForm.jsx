import  { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const elementsRef = useRef([]);
  const formRef = useRef(null);
  const [status, setStatus] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(''); // State for selected subject
  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation function - validates 13 or less digits with country code
  const validatePhone = (phone) => {
    if (!phone) return true; // Phone is optional
    // Remove all non-digit characters to count just the numbers
    const digitsOnly = phone.replace(/\D/g, '');
    // Valid if 13 or fewer digits and starts with a country code (assumed to be 1-3 digits)
    return digitsOnly.length <= 13 && digitsOnly.length >= 8;
  };

  // Form validation
  const validateForm = () => {
    const formValues = new FormData(formRef.current);
    const email = formValues.get('user_email');
    const phone = formValues.get('user_phone');
    
    const newErrors = {
      email: '',
      phone: ''
    };
    
    let isValid = true;
    
    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    if (phone && !validatePhone(phone)) {
      newErrors.phone = 'Phone number must contain 8-13 digits with country code';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

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

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus('Please fix the errors in the form');
      return;
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus('Message sent successfully!');
      formRef.current.reset(); // Reset the form
      setSelectedSubject(''); // Reset the selected subject
      setErrors({ email: '', phone: '' }); // Reset errors
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
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
          <p className="text-2xl font-semibold mb-4">Subject</p>
          <input
            type="text"
            name="subject"
            placeholder="Type your subject here"
            value={selectedSubject}
            onChange={e => setSelectedSubject(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:outline-none"
            required
          />
        </div>

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
              onChange={() => {
                if (errors.email) {
                  setErrors(prev => ({ ...prev, email: '' }));
                }
              }}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <input
              type="tel"
              name="user_phone"
              placeholder="Phone (with country code)"
              maxLength={17} // Allow for formatting characters
              onKeyPress={(e) => {
                // Only allow numbers and common formatting characters
                const pattern = /[0-9+\-\s()]/;
                const inputChar = String.fromCharCode(e.charCode);
                if (!pattern.test(inputChar)) {
                  e.preventDefault();
                  return;
                }
                
                // Count digits only (ignore formatting characters)
                const input = e.target.value;
                const digitsOnly = input.replace(/\D/g, '');
                
                // If we already have 13 digits and trying to add another digit, prevent it
                if (digitsOnly.length >= 13 && /[0-9]/.test(inputChar)) {
                  e.preventDefault();
                }
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:outline-none"
              onChange={(e) => {
                if (errors.phone) {
                  setErrors(prev => ({ ...prev, phone: '' }));
                }
                
                // Enforce digit limit on paste or other input methods
                const input = e.target.value;
                const digitsOnly = input.replace(/\D/g, '');
                
                if (digitsOnly.length > 13) {
                  // If we have more than 13 digits, truncate to 13 digits
                  // This is needed for paste events or other input methods
                  const truncated = digitsOnly.slice(0, 13);
                  // Create a formatted string if needed
                  e.target.value = truncated;
                }
              }}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
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

      {status && <p className={`mt-4 text-center text-lg ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>{status}</p>}
    </form>
  );
};

export default ContactForm;