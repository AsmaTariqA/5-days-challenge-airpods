import { useEffect, useState, useRef } from "react";
import { GalleryData } from "./GalleryData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Gallery() {
  const [data, setData] = useState([]);
  const marqueeRef = useRef(null);
  const secondMarqueeRef = useRef(null); // New reference for second marquee
  const [collection, setCollection] = useState([]);
  const galleryRef = useRef();

  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.title))]);

    const galleryItems = galleryRef.current.querySelectorAll(".gallery-item");
    galleryItems.forEach((item, index) => {
      const direction = index % 2 === 0 ? 100 : -100;

      gsap.fromTo(
        item,
        { opacity: 0, y: direction, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom", // Start when the item enters the viewport
            end: "bottom top",   // End when the item leaves the viewport
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Marquee animation for the first marquee
    gsap.to(marqueeRef.current, {
      xPercent: -100,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });

    // Marquee animation for the second marquee
    gsap.to(secondMarqueeRef.current, {
      xPercent: -100,
      duration: 25, // You can adjust the duration for a different speed
      ease: "linear",
      repeat: -1,
    });
  }, [data]);

  const gallery_filter = (category) => {
    if (category === "All") {
      setData(GalleryData);
    } else {
      const filteredData = GalleryData.filter((item) => item.title === category);
      setData(filteredData);
    }

    const galleryItems = galleryRef.current.querySelectorAll(".gallery-item");
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    galleryItems.forEach((item, index) => {
      const direction = index % 2 === 0 ? 100 : -100;

      gsap.fromTo(
        item,
        { opacity: 0, y: direction, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none none",
          },
        }
      );
    });
  };

  return (
    <>
      <div
        ref={galleryRef}
        className="p-4 sm:p-6 md:p-8 bg-light-gray rounded-lg m-3 sm:m-4 md:m-8"
      >
        <h1 className="text-center text-2xl sm:text-3xl font-semibold text-white mb-4 sm:mb-6">
          Islamic Art Gallery
        </h1>

        {/* Filter Buttons */}
        <div className="mb-4">
          <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-3 font-rubik">
            <li>
              <button
                onClick={() => gallery_filter("All")}
                className="border-2 border-transparent rounded-sm m-2 bg-[#334a07] text-white hover:border-[#334a07] hover:text-[#334a07] hover:bg-transparent transition-all duration-300 px-5 py-2"
              >
                All
              </button>
            </li>
            {collection.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => gallery_filter(item)}
                  className="border-2 border-transparent rounded-sm m-2 bg-[#334a07] text-white hover:border-[#334a07] hover:text-[#334a07] hover:bg-transparent transition-all duration-300 px-5 py-2"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Cards */}
        <div className="grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-20">
          {data.map((item) => (
            <div
              key={item.id}
              className="gallery-item overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-[#334a07] mb-4">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600">
                  A beautiful depiction of {item.title.toLowerCase()}, capturing
                  the essence of Islamic art and culture.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* First Marquee */}
      <div className="overflow-hidden">
        <div
          ref={marqueeRef}
          className="whitespace-nowrap text-2xl sm:text-3xl font-semibold uppercase tracking-wider text-[#334a07] font-lora"
        >
          Islamic Art Gallery &nbsp;|&nbsp; Discover the Beauty of Islamic
          Patterns &nbsp;|&nbsp; A Journey Through History &nbsp;|&nbsp; Unity
          in Diversity &nbsp;|&nbsp; Celebrating Artistic Heritage &nbsp;|&nbsp;
          The Elegance of Geometry &nbsp;|&nbsp; Colors of Culture &nbsp;|&nbsp;
          Inspirations from the Quran &nbsp;|&nbsp; Timeless Calligraphy
        </div>
      </div>

      {/* Second Marquee */}
      <div className="overflow-hidden mt-6">
        <div
          ref={secondMarqueeRef}
          className="whitespace-nowrap text-2xl sm:text-3xl font-semibold uppercase tracking-wider text-[#334a07] font-lora mb-9"
        >
          Explore Islamic Art &nbsp;|&nbsp; The Beauty of Calligraphy &nbsp;|&nbsp;
          A Rich Heritage &nbsp;|&nbsp; Islamic Patterns &nbsp;|&nbsp; Architectural Wonders &nbsp;|&nbsp;
          Inspired by Faith &nbsp;|&nbsp; The Art of Geometry &nbsp;|&nbsp; Spiritual Beauty
        </div>
      </div>
    </>
  );
}

export default Gallery;
