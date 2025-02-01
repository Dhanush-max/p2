import React from 'react';
import Header from '../header';
import Footer from '../footer';
import air from "../../assets/air.jpg";

const ProductionOfMouldsAndTooling = () => {
  return (
    <div>
      <Header />
      <section className="absolute inset-0 w-full h-full z-20">
             <div className="ml-24 w-[calc(100%-6rem)] h-full">
               <div className="h-full mx-0 flex flex-wrap">
                 <div className="border-l border-r border-[#dfdfdf] h-full basis-0 grow max-w-full"></div>
                 {[...Array(5)].map((_, index) => (
                   <div
                     key={index}
                     className="border-r border-[#dfdfdf] h-full basis-0 grow max-w-full"
                   ></div>
                 ))}
               </div>
             </div>
           </section>
           <section className="bg-gradient-to-b from-transparent to-black h-screen section-before relative z-10">
             <div className="w-full h-screen absolute z-0">
               <video className="object-cover w-full h-full" autoPlay muted loop>
                 <source src={air} type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
             </div>
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-20"></div>
             <div className="flex items-center pt-60 ml-24 w-[calc(100%-6rem)] z-30">
               <div className="relative bg-white p-5 h-fit">
                 <div className="text-black text-6xl">Let's Fly!</div>
               </div>
             </div>
           </section>
      <Footer />
    </div>
  );
};

export default ProductionOfMouldsAndTooling;