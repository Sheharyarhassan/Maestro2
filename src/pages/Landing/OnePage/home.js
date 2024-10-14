import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { bannerCards } from "./CardsBannerData";
import sliderimage1 from "../../../assets/images/heroBackground.jpg";
const Home = () => {
  const [selectedCard, setSelectedCard] = useState("");
  console.log("SeelctedArea", selectedCard);
  const handleCardClick = (heading) => {
    setSelectedCard(heading); // Set the clicked card's heading as the selected value
  };
  const HeaderStyle = {
    backgroundColor: '#f6cf37',
    width: "100%",
  };
  return (
    <React.Fragment>
      <section className={` pb-0 hero-section `} style={HeaderStyle} id="hero">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col xl={12} lg={12} sm={12}>
              <div className="text-center">
                <h1 className="text-black fw-morebold">
                  CHOOSE YOUR COMPOSER
                </h1>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center pt-4">
            {bannerCards.map((value, index) => {
              return (
                <Col xl={4} lg={4} md={6} sm={12} key={index}>
                  <div
                    className="text-center mb-3"
                    onClick={() => handleCardClick(value.area)}
                    style={{
                      cursor: "pointer",
                      border:
                        selectedCard === value.area ? "3px solid blue" : "none",
                      borderRadius: "20px",
                    }}
                  >
                    <img
                      src={value.image}
                      className="w-100 rounded-top"
                      alt="yellow"
                    />
                    <div className="bg-white text-center rounded-bottom py-2">
                      <h4
                        className=" pt-2 fw-extrabold"
                        style={{
                          color: `${value.textColor}`,
                        }}
                      >
                        {value.heading}
                      </h4>
                      <h4
                        className=" pb-2 mb-0 fw-bold"
                        style={{
                          color: `${value.textColor}`,
                        }}
                      >
                        {value.ageGroup}
                      </h4>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Home;
