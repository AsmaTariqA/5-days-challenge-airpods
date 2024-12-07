import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "./img1.jpg";
import image2 from "./img2.webp";
import image3 from "./img3.jpg";
import image4 from "./img.jpg";
import image5 from "./img4.jpg";
import image6 from "./img5.jpg"

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRefs = useRef([]);


  useEffect(() => {
    // Animation for sections
    sectionRefs.current.forEach((section, index) => {
      const animationSettings = [
        { opacity: 0, x: -100 }, // Left to center
        { opacity: 0, scale: 0.8 }, // Scale up
        { opacity: 0, x: 100 }, // Right to center
        {opacity :0, scale :0.7}
      ];

      gsap.fromTo(
        section,
        animationSettings[index],
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%", // Start earlier
            end: "top 30%", // End later
            toggleActions: "play none none none", // Play once, stay visible
            scrub: false, // Keep animations untied to scroll progress
          },
        }
      );
    });

 

  }, []);

  return (
    <div className="flex flex-col gap-16 p-6 sm:p-8 md:p-12 bg-[#f9fafb] font-rubik">
      {/* Marquee Section */}
      

      {/* Section 1 */}
      <div
        className="flex flex-col md:flex-row items-center md:items-start gap-8"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-[#334a07] mt-11 uppercase tracking-widest font-lora">
            Islamic Geometric Patterns
          </h1>
          <p className="text-lg text-black leading-relaxed mt-9">
            Geometric patterns in Islamic art symbolize order, balance, and
            unity. The repetitive designs represent the infinite nature of
            Allah, reflecting a universe governed by divine order. These
            patterns are used extensively in Islamic architecture, such as in
            mosques, madrasas, and palaces, conveying a sense of harmony and
            spiritual beauty.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={image1}
            alt="Art Gallery 1"
            className="rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500 w-1/2"
          />
          <img
            src={image2}
            alt="Art Gallery 2"
            className="rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500 w-1/3 ml-[40%] -mt-24"
            ref={(el) => (sectionRefs.current[4] = el)}
          />
        </div>
      </div>

      {/* Section 2 */}
      <div
        className="flex flex-col md:flex-row items-center md:items-start gap-8"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <div className="md:w-2/5 mt-6 md:mt-0">
          <img
            src={image4}
            alt="Art Gallery 2"
            className="rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500 w-1/2"
          />
           <img
            src={image6}
            alt="Art Gallery 2"
            className="rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500 w-1/2 ml-[40%] -mt-24"
          />
         
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-bold text-[#334a07] mt-14 uppercase tracking-widest font-lora">
            Golden Age Achievement
          </h1>
          <p className="text-lg text-black leading-relaxed mt-6">
            Islamic scientists built on the work of their Greek and Indian
            counterparts. During the Golden Age of Islam, scholars made
            groundbreaking advancements in fields like mathematics, astronomy,
            and medicine. Observatories were built during this period to study
            the sky, and many important scientific works were translated into
            Arabic, preserved, and expanded upon. This era laid the foundation
            for modern science.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div
        className="flex flex-col md:flex-row items-center md:items-start gap-8"
        ref={(el) => (sectionRefs.current[2] = el)}
      >
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-bold text-[#334a07] mt-11 uppercase tracking-widest font-lora">
            Islamic Golden Age
          </h1>
          <p className="text-lg text-black leading-relaxed mt-6">
            The Islamic Golden Age, which began during the reign of Caliph
            Harun al-Rashid, marked a period of immense cultural, economic, and
            scientific flourishing. Muslims established one of the largest and
            most powerful empires in history, with contributions that spanned
            from the development of algebra to advancements in architecture,
            astronomy, and philosophy.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={image3}
            alt="Art Gallery 3"
            className="rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500 w-1/2"
          />
           <img
            src={image5}
            alt="Art Gallery 2"
            className="rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500 w-1/2 ml-[40%] -mt-24"
          />
        </div>
      </div>
      
    </div>
  );
};

export default About;
