import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef();
  const headingRef = useRef();
  const inputRefs = useRef([]);


  useEffect(() => {
    // Animation for the heading (fade in and slide up)
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%", 
          end: "bottom top",
          scrub: true, 
          markers: false, 
        },
      }
    );

    
    gsap.fromTo(
      formRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 75%", 
          end: "bottom top",
          scrub: true,
          markers: false, 
        },
      }
    );

    // Animation for each input field (slide in from left)
    inputRefs.current.forEach((input, index) => {
      gsap.fromTo(
        input,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: input,
            start: "top 75%", 
            end: "bottom top",
            scrub: true, 
            markers: false, 
          },
        }
      );
    });

    
   
    
  }, []);

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center py-10 relative">
      {/* Contact Page Heading */}
      <h1
        ref={headingRef}
        className="text-4xl sm:text-5xl font-bold text-[#334a07] text-center mb-8"
      >
        Get in Touch with Us
      </h1>

      {/* Contact Form */}
      <form
        ref={formRef}
        className="bg-white p-8 rounded-xl shadow-lg w-11/12 sm:w-9/12 md:w-6/12 lg:w-5/12 xl:w-4/12"
      >
        <div className="mb-6">
          <input
            ref={(el) => (inputRefs.current[0] = el)}
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#334a07] transition duration-300"
          />
        </div>

        <div className="mb-6">
          <input
            ref={(el) => (inputRefs.current[1] = el)}
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#334a07] transition duration-300"
          />
        </div>

        <div className="mb-6">
          <textarea
            ref={(el) => (inputRefs.current[2] = el)}
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#334a07] transition duration-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#334a07] text-white font-semibold rounded-xl hover:bg-[#2c3e1f] transition duration-300"
        >
          Send Message
        </button>
      </form>

    </div>
  );
};

export default Contact;
