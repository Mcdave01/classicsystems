import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AosInit = () => {
  useEffect(() => {
    AOS.init({
      // Customize the AOS options here (duration, easing, etc.)
      duration: 1200, // Animation duration
      once: true,     // Whether animation should happen only once

      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return null; // This component doesn't render anything
};

export default AosInit;
