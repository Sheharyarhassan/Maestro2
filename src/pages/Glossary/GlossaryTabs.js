import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import { Link } from 'react-router-dom';
import classnames from "classnames";

const GlossaryTabs = () => {
    const [customActiveTab, setCustomActiveTab] = useState("1");

    const toggleCustom = (tab) => {
        if (customActiveTab !== tab) {
            setCustomActiveTab(tab);
        }
    };

    const tabContent = {
        "1": [
            { title: "ABSOLUTE MUSIC", description: "Music that is “free of” any explicit connection with words or specific meaning." },
            { title: "ACCELERANDO", description: "Getting gradually faster." },
            { title: "ADAGIO", description: "A slow tempo. Generally slower than andante, but not as slow as largo. Literally, at ease." },
            { title: "ALLEGRETTO", description: "Slightly less fast than allegro, often of lighter texture or character." },
            { title: "ALLEGRO", description: "A fast or moderately fast tempo." },
            { title: "ANDANTE", description: "Moderately slow tempo, between allegro and adagio. Walking speed; medium." },
            { title: "ANDANTINO", description: "An ambiguous tempo term that could mean slightly less faster or slower than andante." },
            { title: "ARCO", description: "Played by drawing the bow across the strings." },
            { title: "ARIA", description: "A composition for solo voice and accompaniment usually within the context of an opera, oratorio or cantata." },
            { title: "ARPEGGIO", description: "A chord whose pitches are sounded successively rather than simultaneously." },
            { title: "ATONALITY", description: "Avoidance of centering around a specified note or key area." },
            { title: "AUTOGRAPH", description: "Manuscript of a musical work in the composer’s own hand." },
            { title: "Bat", description: "This is a bat" },
            { title: "Cat", description: "This is a Cat" },
            // Add more content as needed
        ],
        // Add other tabs content as needed
    };

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    alphabet.forEach((char, index) => {
        tabContent[index + 2] = tabContent["1"].filter(item => item.title.startsWith(char));
    });

    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={12} className='p-0'>
                        <Card style={{ background: "transparent", boxShadow: 'none' }} >
                            <CardBody className='p-0 glosarry-tabs-wrapper'>
                                <Nav tabs className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3 bg-white px-md-5 px-2 border-0 shadow-sm">
                                    <NavItem>
                                        <NavLink
                                            style={{
                                                cursor: "pointer", fontWeight: 'bold',
                                                color: customActiveTab === "1" ? "rgb(0,159,227)" : "rgb(0 0 0 / 40%)"
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
                                                    cursor: "pointer", fontWeight: 'bold',
                                                    color: customActiveTab === (index + 2).toString() ? "rgb(0,159,227)" : "rgb(0 0 0 / 40%)"
                                                }}
                                                className={classnames({ active: customActiveTab === (index + 2).toString() })}
                                                onClick={() => toggleCustom((index + 2).toString())}
                                            >
                                                {char}
                                            </NavLink>
                                        </NavItem>
                                    ))}
                                </Nav>

                                <Container className='mt-5'>
                                    <TabContent activeTab={customActiveTab} className="text-muted">
                                        {Object.keys(tabContent).map(tabId => (
                                            <TabPane tabId={tabId} key={tabId}>
                                                {tabContent[tabId].length > 0 ? (
                                                    tabContent[tabId].map((item, index) => (
                                                        <div key={index} className='cnt-wrapper'>
                                                            <h5 style={{ color: 'rgb(0,159,227)' }} className='text-uppercase fw-semibold'>{item.title}</h5>
                                                            <p className='text-dark fw-bold fs-5'>{item.description}</p>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className='cnt-wrapper'>
                                                        <p className='text-dark fw-bold fs-5'>No content found</p>
                                                    </div>
                                                )}
                                            </TabPane>
                                        ))}
                                    </TabContent>
                                </Container>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default GlossaryTabs;
