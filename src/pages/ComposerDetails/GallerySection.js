import React, { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Nav,
  NavItem,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import { tabContent } from "./FindComposerData";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import CardImage from "../../assets/images/Images-Maestro/New Assets/ComposerBg.png";
import rightBlueNote from "../../assets/images/Images-Maestro/New Assets/rightbluenote.png";
import rightgreennote from "../../assets/images/Images-Maestro/New Assets/rightgreennote.png";
import rightorangenote from "../../assets/images/Images-Maestro/New Assets/rightorangenote.png";
import leftGreennote from "../../assets/images/Images-Maestro/New Assets/leftgreennote.png";
import leftbottomgreen from "../../assets/images/Images-Maestro/New Assets/leftbottomgreen.png";
import leftbluenote from "../../assets/images/Images-Maestro/New Assets/leftbluenote.png";
const GallerySection = () => {
  const [customActiveTab, setCustomActiveTab] = useState("1");

  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setCustomActiveTab(tab);
    }
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Create a filtered tabContent array for each letter in the alphabet
  alphabet.forEach((char, index) => {
    tabContent[index + 2] = tabContent["1"].filter((item) =>
      item.Name.trim().startsWith(char)
    );
  });
  const backgroundStyle = {
    backgroundColor: "#f4e652",
    position: "relative",
    overflowX: "hidden",
  };
  const cardImageStyle = {
    backgroundImage: `url(${CardImage})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeate: "no-repeate",
  };
  const rightBlueNoteStyle = {
    top: "50%",
    right: "-2%",
  };
  const rightgreennoteStyle = {
    top: "17%",
    right: "1%",
  };
  const rightorangenoteStyle = {
    top: "24%",
    right: "2.5%",
  };
  const leftGreenNoteStyle = {
    top: "27%",
    left: "-2.5%",
  }
  const leftBlueNoteStyle = {
    top: "47%",
    left:'3%'
  }
  const leftbottomgreenStyle = {
    bottom:'2%',
    left:'-2%'
  }
  return (
    <div className="w-100" style={backgroundStyle}>
        <img
        src={leftGreennote}
        className="mw-100 h-auto position-absolute"
        style={leftGreenNoteStyle}
      /> 
       <img
        src={leftbluenote}
        className="mw-100 h-auto position-absolute"
        style={leftBlueNoteStyle}
      /> 
       <img
        src={leftbottomgreen}
        className="mw-100 h-auto position-absolute"
        style={leftbottomgreenStyle}
      /> 
      <img
        src={rightBlueNote}
        className="mw-100 h-auto position-absolute"
        style={rightBlueNoteStyle}
      />
      <img
        src={rightgreennote}
        className="mw-100 h-auto position-absolute"
        style={rightgreennoteStyle}
      />
      <img
        src={rightorangenote}
        className="mw-100 h-auto position-absolute"
        style={rightorangenoteStyle}
      />
      <Container className="mt-5 pt-5 position-relative">
        <Row>
          <Col sm="12" className="ps-4">
            <div className="galleryContent">
              <h3 className="text-primary fw-morebold">FIND COMPOSERS</h3>
              <h4 className="text-black fw-morebold">A-Z of composers.</h4>
            </div>
          </Col>
          <Col sm="12">
            <Card
              style={{ background: "transparent", boxShadow: "none" }}
              className="px-0 w-100"
            >
              <CardBody className="p-0 glosarry-tabs-wrapper">
                <Nav
                  tabs
                  className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3 border-0"
                >
                  <NavItem className="ps-2">
                    <NavLink
                      style={{
                        cursor: "pointer",
                        fontWeight: "bold",
                        color:
                          customActiveTab === "1"
                            ? "rgb(0,159,227)"
                            : "rgb(0 0 0 / 40%)",
                        borderBottom:
                          customActiveTab === "1"
                            ? "4px solid rgb(0,159,227)" // Underline for active tab
                            : "none",
                      }}
                      className={classnames({
                        active: customActiveTab === "1",
                      })}
                      onClick={() => toggleCustom("1")}
                    >
                      ALL
                    </NavLink>
                  </NavItem>
                  {alphabet.map((char, index) => (
                    <NavItem key={index}>
                      <NavLink
                        style={{
                          cursor: "pointer",
                          fontWeight: "bold",
                          color:
                            customActiveTab === (index + 2).toString()
                              ? "rgb(0,159,227)"
                              : "rgb(0 0 0 / 40%)",
                          borderBottom:
                            customActiveTab === (index + 2).toString()
                              ? "4px solid rgb(0,159,227)" // Underline for active tab
                              : "none",
                        }}
                        className={classnames({
                          active: customActiveTab === (index + 2).toString(),
                        })}
                        onClick={() => toggleCustom((index + 2).toString())}
                      >
                        {char}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>

                <div className="mt-4 px-3">
                  <Row>
                    <Col sm="12" className="px-2">
                      <div>
                        <h5 className="mb-1 text-primary fw-semibold">ROMANTIC PERIOD</h5>
                        <h5>1827 - 1900</h5>
                      </div>
                    </Col>
                    <Col sm={12}>
                      <TabContent
                        activeTab={customActiveTab}
                        className="text-muted"
                      >
                        {Object.keys(tabContent).map((tabId) => (
                          <TabPane tabId={tabId} key={tabId}>
                            {tabContent[tabId].length > 0 ? (
                              <Row>
                                {tabContent[tabId].map((item, index) => (
                                  <Col
                                    md="6"
                                    lg="4"
                                    sm="6"
                                    xs="12"
                                    key={index}
                                    // className="mb-4"
                                  >
                                    <Card className="border-0 shadow-sm">
                                      <CardBody className="p-0">
                                        <div
                                          className="cardImage text-center rounded-top p-4 pb-0"
                                          style={cardImageStyle}
                                        >
                                          <img
                                            src={item.Image}
                                            alt="composer"
                                            className="mw-100 h-auto"
                                          />
                                        </div>
                                        <div className="p-3 rounded-bottom">
                                          <p className="text-uppercase mb-0">
                                            <span className="fw-bold">
                                              Name:
                                            </span>{" "}
                                            {item.Name}
                                          </p>
                                          <p className="text-dark mb-0">
                                            <span className="fw-bold">
                                              Born:
                                            </span>{" "}
                                            {item.Born}
                                          </p>
                                          <p className="text-dark mb-0">
                                            <span className="fw-bold">
                                              {" "}
                                              PlaceoBirth:
                                            </span>{" "}
                                            {item.Pob}
                                          </p>
                                          <p className="text-dark mb-0">
                                            <span className="fw-bold">
                                              Period:
                                            </span>{" "}
                                            {item.Period}
                                          </p>
                                        </div>
                                      </CardBody>
                                    </Card>
                                  </Col>
                                ))}
                              </Row>
                            ) : (
                              <div className="cnt-wrapper">
                                <p className="text-dark fw-bold fs-5">
                                  No content found
                                </p>
                              </div>
                            )}
                          </TabPane>
                        ))}
                      </TabContent>
                    </Col>
                    <Col sm={12} className="text-black text-center">
                      <h5 className="fw-bold">Load More</h5>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GallerySection;
