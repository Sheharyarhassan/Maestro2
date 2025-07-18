import React from "react";
import BannerImage from "../../assets/images/Images-Maestro/New Assets/Banner-composers.jpg";
import { Container, Row, Col } from "reactstrap";
const BannerSection = () => {
  const backgroundStyle = {
    backgroundImage: `url(${BannerImage})`,
    width: "100%",
    padding:'5rem 1rem',
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeate: "no-repeate",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="bannerMainSection" style={backgroundStyle}>
     <Container>
        <Row className="justify-content-center position-relative z-3">
          <Col sm={10} className="text-center">
            {" "}
            <h1 className="text-white fw-bold"> Composers</h1>
            <h3 className="text-white fw-light">
              Ebitat faccum volupid eos as as maximaio. Nam fugit, qui omnis aut
              la velictis cumet unt. Et adipicia qui od molupta sintist et
              dolupti stempore omniaspiente oditas.
            </h3>
          </Col>
        </Row>
      </Container>
      </div>
    
  );
};

export default BannerSection;
