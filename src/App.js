import React, { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

import Loader from "./components/Loader/Loader";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import IslamicArtMuseums from "./components/Cards/Cards";

const App = () => {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);
  
  useLayoutEffect(() => {
    // Create a new GSAP context and timeline each time the component mounts
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true), // Set loaderFinished to true after animation
      });

      // Set up your loader animation here
      tl.to(".loader-element", { opacity: 1, duration: 1 });

      setTimeline(tl); // Store the timeline in state
    });

    // Cleanup the GSAP context when the component unmounts
    return () => context.revert();
  }, []); // Empty dependency array ensures this runs on mount and unmount

  // Reset loaderFinished when the component reloads
  useLayoutEffect(() => {
    if (timeline) {
      setLoaderFinished(false); // Reset to false so the loader will show again
      timeline.restart(); // Restart the loader animation
    }
  }, [timeline]); // Triggered when timeline changes

  return (
    <div>
      {loaderFinished ? (
        <>
          <Hero />
          <About />
          <Gallery/>
          <IslamicArtMuseums/>
          <Contact/>
          <Footer/>
        </>
      ) : (
        <Loader timeline={timeline} />
      )}
    </div>
  );
};

export default App;
