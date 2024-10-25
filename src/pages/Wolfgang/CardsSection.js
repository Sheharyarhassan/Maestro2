import React from "react";
import RightIcon from "../../assets/images/Images-Maestro/New Assets/wolfTopRight.png";
import RightBottomIcon from "../../assets/images/Images-Maestro/New Assets/wolfBottomRight.png";
import LeftIcon from "../../assets/images/Images-Maestro/New Assets/wolfTopLeft.png";
import Chick from "../../assets/images/Images-Maestro/New Assets/Red_0511.png";
import Boxes from "../../assets/images/Images-Maestro/New Assets/Piano_red.png";
import Boxes2 from "../../assets/images/Images-Maestro/New Assets/Violin_Red.png";
import Boxes3 from "../../assets/images/Images-Maestro/New Assets/ludwigBeethoven.png";
import Boxes4 from "../../assets/images/Images-Maestro/New Assets/boxwolf.png";
import Boxes5 from "../../assets/images/Images-Maestro/New Assets/boxes 15.png";
import { NavLink } from "reactstrap";
const CardsSection = () => {
  const BackgroundStyle = {
    background:
      "linear-gradient(180deg, rgba(46,131,167) 0%, rgba(1,50,117) 100%)",
    // height: "100vh",
    position: "relative",
    width: "100%",
    overflowX: "hidden",
  };
  const rightIconStyle = {
    top: "4%",
    right: "-1%",
  };
  const leftIconStyle = {
    top: "10%",
    left: "-4%",
  };
  const RightBottomStyle={
    top: "71%",
    right: "1%",
  }
  return (
    <div style={BackgroundStyle} className="pb-5 pt-5">
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
      <img
        src={RightBottomIcon}
        alt="MusicIcon"
        className="position-absolute mw-100 h-auto"
        style={RightBottomStyle}
      />
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <div className="Content text-center">
              <h2 className="text-white">
                ARE YOU READY TO FACE THE MONSTER MASH-UP MACHINE?
              </h2>
              <h4 className=" text-white fw-normal">
                In order to prepare, you must achieve Maestro level in three
                categories first:
                <br /> Elements of Music, Instruments and Composers.
                <br />
                Don’t worry, you’re not alone. You have help.
              </h4>
            </div>
          </div>
          <div className="col-12 ">
            <div className="text-center">
              <img src={Chick} alt="chick" className="mw-100 h-auto" />
              <h1 className="text-white super-bubble">WOLFGANG</h1>
            </div>
          </div>

          <div className="col-12 mt-2">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 mt-4">
              <NavLink href="/rhythm">
                <div className="card-box text-center">
                  <h2 className="text-white super-bubble">STAGE 1</h2>
                  <h4 className="text-white mb-1">Elements of Music</h4>
                  <img
                    src={Boxes}
                    className="mw-100 h-auto rounded-3"
                    alt="boxes"
                  />
                </div>
                </NavLink>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mt-4">
                <NavLink href="/instruments">
                <div className="card-box text-center">
                  <h2 className="text-white super-bubble">STAGE 2</h2>
                  <h4 className="text-white mb-1">Instruments</h4>
                  <img
                    src={Boxes2}
                    className="mw-100 h-auto rounded-3"
                    alt="boxes"
                  />
                </div>
                </NavLink>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mt-4">
              <NavLink href="/composer">
                <div className="card-box text-center">
                  <h2 className="text-white super-bubble">STAGE 3</h2>
                  <h4 className="text-white mb-1">Composers</h4>
                  <img
                    src={Boxes3}
                    className="mw-100 h-auto rounded-3"
                    alt="boxes"
                  />
                </div>
                </NavLink>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mt-4">
              <NavLink href="/Learn">
                <div className="card-box text-center">
                  <h2 className="text-white super-bubble">STAGE 4</h2>
                  <h4 className="text-white mb-1">Fun Facts</h4>
                  <img
                    src={Boxes4}
                    className="mw-100 h-auto rounded-3"
                    alt="boxes"
                  />
                </div>
                </NavLink>
              </div>
              <div className="col-12 col-md-12 col-lg-8 mt-4">
              <NavLink href="/game">
                <div className="card-box text-center">
                  <h2 className="text-white super-bubble">STAGE 5</h2>
                  <h4 className="text-white mb-1">Monster Mash-Up Machine</h4>
                  <img
                    src={Boxes5}
                    className="mw-100 h-auto rounded-3"
                    alt="boxes"
                  />
                </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
