import React from "react";
import RightIcon from "../../assets/images/Images-Maestro/New Assets/RightNote.png";
import LeftIcon from "../../assets/images/Images-Maestro/New Assets/LeftNote.png";
import Chick from "../../assets/images/Images-Maestro/New Assets/Chick.png";
import Boxes from "../../assets/images/Images-Maestro/New Assets/boxes.jpg";
import Boxes2 from "../../assets/images/Images-Maestro/New Assets/boxes2.jpg";
import Boxes3 from "../../assets/images/Images-Maestro/New Assets/boxes3.jpg";
import Boxes4 from "../../assets/images/Images-Maestro/New Assets/boxes4.jpg";
import Boxes5 from "../../assets/images/Images-Maestro/New Assets/boxes5.jpg";
const CardsSection = () => {
  const BackgroundStyle = {
    background:
      "linear-gradient(180deg, rgba(71,186,212,1) 0%, rgba(96,214,196,1) 75%)",
    // height: "100vh",
    position: "relative",
    width: "100%",
    overflowX: "hidden",
  };
  const rightIconStyle = {
    top: "20px",
    right: "-1%",
  };
  const leftIconStyle = {
    top: "10%",
    left: "-4%",
  };
  return (
    <div style={BackgroundStyle} className="pb-5 mt-5">
      <img
        src={RightIcon}
        alt="MusicIcon"
        className="position-absolute mw-100 h-auto "
        style={rightIconStyle}
      />
      <img
        src={LeftIcon}
        alt="MusicIcon"
        className="position-absolute mw-100 h-auto"
        style={leftIconStyle}
      />
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <div className="Content text-center">
              <h4 className="text-white">
                ARE YOU READY TO FACE THE MONSTER MASH-UP MACHINE?
              </h4>
              <h5 className=" text-white">
                In order to prepare, you must achieve Maestro level in three
                categories first:
                <br /> Elements of Music, Instruments and Composers.
                <br />
                Don’t worry, you’re not alone. You have help.
              </h5>
            </div>
          </div>
          <div className="col-12 ">
            <div className="text-center">
              <img src={Chick} alt="chick" className="mw-100 h-auto" />
              <h1 className="text-white">HILDEY</h1>
            </div>
          </div>

          <div className="col-12 mt-2">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 mt-4">
                <div className="card-box text-center">
                  <h2 className="text-white">STAGE 1</h2>
                  <p className="text-white mb-0">Elements of Music</p>
                  <img
                    src={Boxes}
                    className="mw-100 h-auto rounded-3"
                    alt="boxes"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mt-4">
                <div className="card-box text-center">
                  <h2 className="text-white">STAGE 2</h2>
                  <p className="text-white mb-0">Elements of Music</p>
                  <img
                    src={Boxes2}
                    className="mw-100 h-auto rounded-3"
                    alt="boxes"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mt-4">
                <div className="card-box text-center">
                  <h2 className="text-white">STAGE 3</h2>
                  <p className="text-white mb-0">Elements of Music</p>
                  <img
                    src={Boxes3}
                    className="mw-100 h-auto rounded-3"
                    alt="boxes"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mt-4">
                <div className="card-box text-center">
                  <h2 className="text-white">STAGE 4</h2>
                  <p className="text-white mb-0">Elements of Music</p>
                  <img
                    src={Boxes4}
                    className="mw-100 h-auto rounded-3"
                    alt="boxes"
                  />
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-8 mt-4">
                <div className="card-box text-center">
                  <h2 className="text-white">STAGE 5</h2>
                  <p className="text-white mb-0">Elements of Music</p>
                  <img
                    src={Boxes5}
                    className="mw-100 h-auto rounded-3"
                    alt="boxes"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
