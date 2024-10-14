import React, { useEffect } from "react";
import HeroSection from "./HeroSection"
import CardsSection from "./CardsSection";
const index = () => {
  document.title = "Watch- Young Maestro";
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
}, []);
  return (
    <React.Fragment>
      <div className="layout-wrapper">
        <HeroSection />
        <CardsSection/>
      </div>
    </React.Fragment>
  );
};

export default index;
