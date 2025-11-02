import React from 'react';
import HeroImgSection from '../heroImgSection';
import ContactForm from './contactForm';
import ContactInfo from './contactInfo';
import C1 from '../../assets/C1.jpg';

const Contact = () => {
  return (
    <div className='mx-auto'>
     <HeroImgSection img={C1} title='Contact Us' details='Let’s Build Something Exceptional
Reach out to Peridot for composite manufacturing solutions, partnerships, or technical support.
Our team will connect with you to understand your needs and provide precise, reliable assistance
' gradientColor="white" /> 
     <ContactForm />
     <ContactInfo />
    </div>
  );
};

export default Contact;