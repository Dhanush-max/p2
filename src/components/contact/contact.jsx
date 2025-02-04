import React from 'react';
import HeroImgSection from '../heroImgSection';
import ContactForm from './contactForm';
import ContactInfo from './contactInfo';

const Contact = () => {
  return (
    <div className='mx-auto'>
     <HeroImgSection img='src/assets/C1.jpg' title='Contact' details='With our knowledge, experienced people and specialist equipment we are not afraid of any challenges.' gradientColor="white" /> 
     <ContactForm />
     <ContactInfo />
    </div>
  );
};

export default Contact;