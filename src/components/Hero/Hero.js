import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from './hero1.png';
import { animateTitle, animateImage, revealMenu } from "./Animation";

// Hero Component
const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const timeline = useRef(gsap.timeline());
  const heroRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;
      tl.add(animateTitle()).add(revealMenu(), 0).add(animateImage(), 0);
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section className="relative h-screen border-2 border-black m-4 overflow-hidden flex flex-col justify-between font-rubik" ref={heroRef}>
      {/* Navbar */}
      <nav className="w-full z-10">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="text-xl font-bold text-[#859F3D] uppercase tracking-widest cursor-default">
            ISLAMIC GALLERY
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="block lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#859F3D] focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <ul
            className={`flex space-x-8 text-sm font-semibold m-3 lg:flex ${menuOpen ? "flex-col space-y-4" : "hidden"}`}
          >
            <li>
              <a className="border-2 border-transparent rounded-sm bg-[#859F3D] text-white hover:border-[#334a07] hover:text-[#334a07] hover:bg-transparent transition-all duration-300 px-4 py-2" href="#">Home</a>
            </li>
            <li>
              <a className="border-2 border-transparent rounded-sm bg-[#859F3D] text-white hover:border-[#334a07] hover:text-[#334a07] hover:bg-transparent transition-all duration-300 px-4 py-2" href="#">About</a>
            </li>
            <li>
              <a className="border-2 border-transparent rounded-sm bg-[#859F3D] text-white hover:border-[#334a07] hover:text-[#334a07] hover:bg-transparent transition-all duration-300 px-4 py-2" href="#">Info</a>
            </li>
            <li>
              <a className="border-2 border-transparent rounded-sm bg-[#859F3D] text-white hover:border-[#334a07] hover:text-[#334a07] hover:bg-transparent transition-all duration-300 px-4 py-2" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24"> 
      <h1 className="absolute top-[40%]  w-full sm:w-[calc(100%-8rem)] transform -translate-y-1/2 mb-32 flex flex-col text-center  font-lora sm:flex-row justify-center items-center gap-4 sm:gap-12 text-[4.5rem] sm:text-[5.5rem] md:text-[8rem] lg:text-[10rem]">
  <span className="text-[#334a07] font-lora heading" data-hidden data-title-first>Islamic</span>
  <span data-hero-line className="block h-0.5 w-[80%] sm:w-[90%] bg-black transform-origin-top-center"></span>
  <span className="text-[#334a07]" data-hidden data-title-last>Art</span>
</h1>



        <div className="absolute top-[60%] w-full flex justify-center items-center overflow-hidden">
          <div data-image-overlay className="absolute inset-0 z-30 bg-black transform scale-y-[0.31] origin-bottom-center"></div>
          <img className="w-full sm:w-[40%] h-auto rounded-[23px]" data-image src={Image} alt="Hero Blob" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
