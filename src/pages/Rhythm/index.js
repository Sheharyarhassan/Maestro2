import React, { useEffect, useState } from "react";
import RhythmBanner from "./RhythmBanner";
import {
  Button,
  Card,
  CardBody,
  Col,
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import { tabContent } from "./RhythmData";
import musicElement from "../../assets/images/Images-Maestro/New Assets/imageElement1.png";
import RhythmTop10 from "./RhythmTop10";
import IconImage from "../../assets/images/Images-Maestro/New Assets/Icons-Music.png";
import playBar from "../../assets/images/Images-Maestro/New Assets/Play bar.png";
import pronounceIcon from "../../assets/images/Images-Maestro/New Assets/Icons - Pronunciation.png";
import leftNote from "../../assets/images/Images-Maestro/New Assets/LeftNote.png";
import leftbluenote from "../../assets/images/Images-Maestro/New Assets/leftbluenote.png";
import rightbluenote from "../../assets/images/Images-Maestro/New Assets/rightbluenote.png";
import rightbottomSingle from "../../assets/images/Images-Maestro/New Assets/rightbottomSingle.png";
import RightbottomDouble from "../../assets/images/Images-Maestro/New Assets/RightbottomDouble.png";
import chickRhythmbottom from "../../assets/images/Images-Maestro/New Assets/chickRhythmbottom.png";
const Index = () => {
  document.title = " Rhythm- Young Maestro";
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [customActiveTab, setCustomActiveTab] = useState("1");

  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setCustomActiveTab(tab);
    }
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  alphabet.forEach((char, index) => {
    tabContent[index + 2] = tabContent["1"].filter((item) =>
      item.Name.trim().startsWith(char)
    );
  });
  const styleImage = {
    maxWidth: "50px",
    height: "auto",
  };
  const playImage = {
    maxWidth: "200px",
    height: "auto",
  };

  return (
    <React.Fragment>
      <RhythmBanner />
      
      <div
        className="mt-5 position-relative"
        style={{ backgroundColor: "#ea8bb8", overflowX: "hidden", minHeight:'36vh'}}
      >
        <img
          src={leftNote}
          style={{ position: "fixed", top: "25%", left: "-4%"}}
          alt=""
        />
        <img
          src={leftbluenote}
          style={{ position: "fixed", top: "80%", left: "-0.25%"}}
          alt=""
        />
        <img
          src={rightbluenote}
          style={{ position: "fixed", top: "14%", right: "-2%" }}
          alt=""
        />
        <img
          src={rightbottomSingle}
          style={{
            position: "fixed",
            top: "55%",
            right: "2%",
            width: "50px",
          }}
          alt=""
        />
        <img
          src={RightbottomDouble}
          style={{
            position: "fixed",
            top: "61%",
            right: "2%",
            width: "20px",
          }}
          alt=""
        />
        <img
          src={chickRhythmbottom}
          style={{ position: "fixed",top: "68%", right: "5%" }}
          alt=""
        />
        <Container className="rhythmTabsConatiner">
          <Row>
            <Card
              className="pt-5"
              style={{ background: "transparent", boxShadow: "none" }}
            >
              <CardBody className="p-0 glosarry-tabs-wrapper">
                <Nav
                  tabs
                  className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3 border-0"
                >
                  <NavItem>
                    <NavLink
                      style={{
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize:'1rem',
						display:'inlineBlock',
                        color:
                          customActiveTab === "1"
                            ? "rgb(0,159,227)"
                            : "rgb(255 255 255)",
                      }}
                      className={classnames({
                        active: customActiveTab === "1",
                      }, "px-0 me-3")}
                      onClick={() => toggleCustom("1")}
                    >
                      <span className="pe-1">TOP</span><span>10</span>
                    </NavLink>
                  </NavItem>
                  {alphabet.map((char, index) => (
                    <NavItem key={index}>
                      <NavLink
                        style={{
                          cursor: "pointer",
                          fontWeight: "bold",
                          fontSize:'1rem',
                          color:
                            customActiveTab === (index + 2).toString()
                              ? "rgb(0,159,227)"
                              : "rgb(255 255 255)",
                        }}
                        className={classnames({
                          active: customActiveTab === (index + 2).toString(),
                        }, "px-0")}
                        onClick={() => toggleCustom((index + 2).toString())}
                      >
                        {char}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>

                <Container className="mt-5 position-relative">
                  {customActiveTab == "1" ? (
                    <RhythmTop10 />
                  ) : (
                    <TabContent
                      activeTab={customActiveTab}
                      className="text-muted"
                    >
                      {Object.keys(tabContent).map((tabId) => (
                        <TabPane tabId={tabId} key={tabId}>
                          {tabContent[tabId].length > 0 ? (
                            tabContent[tabId].map((item, index) => (
                              <div key={index} className="cnt-wrapper mb-4">
                                <h5 className="text-uppercase text-dark mb-0 fw-bold">
                                  {item.Name}
                                </h5>
                                <h5 className="text-white mt-2 fw-medium">
                                  {item.Details}
                                </h5>
                                <NavLink href="#">
                                  <Row>
                                    <Col
                                      lg={4}
                                      xs={12}
                                      className="position-relative my-2"
                                    >
                                      <div className="rounded-3 d-flex align-items-center">
                                        <img
                                          src={pronounceIcon}
                                          alt=""
                                          style={styleImage}
                                        />
                                        <div className="content  ms-3">
                                          <p className="text-white mb-1">
                                            {" "}
                                            Pronunciation
                                          </p>
                                          <img
                                            src={playBar}
                                            style={playImage}
                                            alt="playBar"
                                          />
                                        </div>
                                      </div>
                                    </Col>

                                    <Col
                                      lg={4}
                                      xs={12}
                                      className="position-relative my-2"
                                    >
                                      <div className="rounded-3 d-flex align-items-center">
                                        <img
                                          src={IconImage}
                                          alt=""
                                          style={styleImage}
                                        />
                                        <div className="content ms-3">
                                          <p className="text-white mb-1">
                                            Example
                                          </p>
                                          <img
                                            src={playBar}
                                            style={playImage}
                                            alt="playBar"
                                          />
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                </NavLink>
                              </div>
                            ))
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
                  )}
                </Container>
              </CardBody>
            </Card>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Index;
