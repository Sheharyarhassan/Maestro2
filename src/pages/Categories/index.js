import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";

import HeroBanner from "../../assets/images/Images-Maestro/Lets-play-thumbnail-yellow.png";

import Game from "../../assets/images/Images-Maestro/Game1.png";
import GameIcon from "../../assets/images/Images-Maestro/Iconyellow-game.png";
import Rhythm from "../../assets/images/Images-Maestro/Rhythm1.png";
import RhythmIcon from "../../assets/images/Images-Maestro/Iconyellow-rhythm.png";
import Instruments from "../../assets/images/Images-Maestro/Instrument1.png";
import InstrumentsIcon from "../../assets/images/Images-Maestro/Iconyellow-instruments.png";
import Composers from "../../assets/images/Images-Maestro/Composer1.png";
import ComposersIcon from "../../assets/images/Images-Maestro/Iconyellow-composers.png";
import Watch from "../../assets/images/Images-Maestro/Watch1.png";
import WatchIcon from "../../assets/images/Images-Maestro/Iconyellow-watch.png";
import Learn from "../../assets/images/Images-Maestro/Learn1.png";
import LearnIcon from "../../assets/images/Images-Maestro/Iconyellow-learn.png";

import VideoImage from "../../assets/images/Images-Maestro/Gamescreen-Yellow.png";
const cards = [
  { image: Game, icon: GameIcon, label: "Game" },
  { image: Rhythm, icon: RhythmIcon, label: "Rhythm" },
  { image: Instruments, icon: InstrumentsIcon, label: "Instruments" },
  { image: Composers, icon: ComposersIcon, label: "Composers" },
  { image: Watch, icon: WatchIcon, label: "Watch" },
  { image: Learn, icon: LearnIcon, label: "Learn" },
];
const semicircle = {
  width: "200px",
  height: "100px",
  borderTopLeftRadius: "200px",
  borderTopRightRadius: "200px",
  border: "10px solid gray",
  borderBottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const tile = {
  width: "40px",
  height: "40px",
  margin: "5px",
  backgroundColor: "#ffcc00" /* Adjust color as needed */,
  borderRadius: "50%",
};
const Index = () => {
  document.title = "Categories- Young Maestro";

  const [customActiveTab, setcustomActiveTab] = useState("1");

  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
 
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
}, []);

  return (
    <React.Fragment>
      <div className="w-100">
        <img className="w-100" src={HeroBanner} />
      </div>
      <Nav
        tabs
        className="nav nav-tabs nav-tabs-custom nav-secondary bg-white px-5"
      >
        <NavItem>
          <NavLink
            style={{ cursor: "pointer" }}
            className={classnames({ active: customActiveTab === "1"},"text-muted fw-bold text-uppercase")}
            onClick={() => toggleCustom("1")}
          >
            <small>Categories</small>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ cursor: "pointer" }}
            className={classnames({ active: customActiveTab === "2" },"text-muted fw-bold text-uppercase")}
            onClick={() => toggleCustom("2")}
          >
            <small>Videos</small>
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={customActiveTab}>
        <TabPane tabId="1">
          <div className="pt-5 pb-5" style={{ backgroundColor: "#5cc5ef" }}>
            <Container>
              <Row className="justify-content-md-evenly justify-content-center">
                {cards.map((card, index) => (
                  <Col key={index} lg={4} md={6} className="mb-4">
                    <div className="rounded-4 position-relative">
                      <div className="position-absolute" style={{top: '23px',left: '18px'}}>
                        <img
                          src={card.icon}
                          height="60"
                          width="60"
                          alt="Card Icon"
                        />
                        <h4 className="text-white fw-semibold mt-2">{card.label}</h4>
                      </div>
                      <img src={card.image} className="w-100 h-auto" />
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </TabPane>
        <TabPane tabId="2">
          <div className="w-100 h-auto">
            <img src={VideoImage} className="mw-100 h-auto" />
          </div>
        </TabPane>
      </TabContent>
    </React.Fragment>
  );
};

export default Index;
