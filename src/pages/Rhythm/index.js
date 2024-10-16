import React, { useEffect, useState } from "react";
import RhythmBanner from "./RhythmBanner";
import musicElement from "../../assets/images/Images-Maestro/New Assets/imageElement1.png"
const Index = () => {
  document.title = " Rhythm- Young Maestro";
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <React.Fragment>
      <RhythmBanner />
      <div className="mt-5" style={{backgroundColor:"#ea8bb8"}}>
        <img className="w-100 h-auto" src={musicElement}/>
      </div>
    </React.Fragment>
  );
};

export default Index;
