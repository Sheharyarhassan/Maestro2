import React, { useState } from "react";
import { Card, CardBody, Col, Container, Nav, NavItem, Row, TabContent, TabPane } from "reactstrap";
import { tabContent } from "./FindComposerData";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

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

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col>
            <div className="galleryContent">
              <h4 className="text-primary">FIND COMPOSERS</h4>
              <h4 className="text-black">A-Z of composers.</h4>
            </div>
          </Col>
          <Card style={{ background: "transparent", boxShadow: "none" }}>
            <CardBody className="p-0 glosarry-tabs-wrapper">
              <Nav
                tabs
                className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3 bg-white px-md-5 px-2 border-0 shadow-sm"
              >
                <NavItem>
                  <NavLink
                    style={{
                      cursor: "pointer",
                      fontWeight: "bold",
                      color:
                        customActiveTab === "1"
                          ? "rgb(0,159,227)"
                          : "rgb(0 0 0 / 40%)",
                    }}
                    className={classnames({ active: customActiveTab === "1" })}
                    onClick={() => toggleCustom("1")}
                  >
                    All
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

              <Container className="mt-5">
                <TabContent activeTab={customActiveTab} className="text-muted">
                  {Object.keys(tabContent).map((tabId) => (
                    <TabPane tabId={tabId} key={tabId}>
                      {tabContent[tabId].length > 0 ? (
                        tabContent[tabId].map((item, index) => (
                          <div key={index} className="cnt-wrapper">
                            <h5
                              style={{ color: "rgb(0,159,227)" }}
                              className="text-uppercase fw-semibold"
                            >
                              {item.Name}
                            </h5>
                            <p className="text-dark fw-bold fs-5">
                              Born: {item.Born}
                            </p>
                            <p className="text-dark fw-bold fs-5">
                              Place of Birth: {item.Pob}
                            </p>
                            <p className="text-dark fw-bold fs-5">
                              Period: {item.Period}
                            </p>
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
              </Container>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default GallerySection;
