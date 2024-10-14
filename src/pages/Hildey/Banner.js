import React from 'react';
import BannerImage from "../../assets/images/Images-Maestro/New Assets/BannerHildey.jpg";

const Banner = () => {
  const bannerSection = {
    backgroundImage: `url(${BannerImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: '100%',
    height: '36vh'
  };

  return (
    <div style={bannerSection}>
     {/* <img src={BannerImage} className='mw-100 h-auto w-100' alt='Banner'/> */}
    </div>
  );
};

export default Banner;
