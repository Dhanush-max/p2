import React from 'react';

const Button = ({ text, href }) => {
  return (
    <a 
      href={href}
      className='ml-4 sm:ml-44 mb-10 mt-0 font-bold text-lg bg-black text-white py-3 px-10 border border-black text-center inline-block hover:bg-white hover:text-black transition duration-300 fade-in-button'
    >
      {text}
    </a>
  );
};

export default Button;