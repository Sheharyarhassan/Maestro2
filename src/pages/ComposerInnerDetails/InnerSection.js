import React from "react";
import { Col, Container, Row } from "reactstrap";
import ComposerBg from "../../assets/images/Images-Maestro/New Assets/ComposerBg.png";
import ComposerImage from "../../assets/images/Images-Maestro/New Assets/ComposerCardImage.png";
import playbarComposer from "../../assets/images/Images-Maestro/New Assets/playbarComposer.png";
import ComposerModelImage from "../../assets/images/Images-Maestro/New Assets/CompserModalImage.png"
const InnerSection = () => {
  const mainSectionStyle = {
    backgroundColor: "#f4e652",
  };
  const imageBox = {
    backgroundImage: `url(${ComposerBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <div className="mainSection w-100 py-5" style={mainSectionStyle}>
      <Container>
        <Row>
          <Col sm="12">
            <h1 className="text-dark">Frédéric Chopin</h1>
          </Col>
          <Col lg="5" className="mt-2">
            <div>
              <div className="composerCard">
                <div
                  className="imageBox rounded-top-4 text-center"
                  style={imageBox}
                >
                  <img
                    src={ComposerImage}
                    alt="composer"
                    className="mw-100 h-auto"
                  />
                </div>
                <div className="contentBox bg-white p-3 rounded-bottom-4">
                  <p className="text-dark mb-0">
                    <span className="fw-bold">Born:</span> March 1st 1810
                  </p>
                  <p className="text-dark mb-0">
                    <span className="fw-bold">Born:</span> October 17th 1849
                  </p>
                  <p className="text-dark mb-0">
                    <span className="fw-bold"> PoBirth:</span> Żelazowa Wola,
                    Poland
                  </p>
                  <p className="text-dark mb-0">
                    <span className="fw-bold"> Period:</span> Romantic
                  </p>
                </div>
              </div>

              <div className="composerVideoCard mt-4">
                <h5>Example</h5>
              <img src={ComposerModelImage} className="mw-100 h-auto w-100" alt="composer"/>
              </div>
              <h5 className="mt-4">Example</h5>
              <div className="playBar bg-white px-3 py-1 rounded-5" >
            
                <img src={playbarComposer} alt="playbar" className="mw-100 h-auto"/>
              </div>
            </div>
          </Col>
          <Col lg="7" className="mt-2">
            <div className="contentCard bg-white rounded-4 px-lg-4 px-3 py-5">
              <h5 className="fw-bold">
                Frédéric Chopin (1810–1849) was a Polish composer and virtuoso
                pianist who is widely regarded as one of the most influential
                musicians of the Romantic era.
              </h5>
              <h5>
                Born in Żelazowa Wola, Poland, Chopin demonstrated extraordinary
                musical talent from an early age, composing and performing by
                the time he was a child.
              </h5>
              <br />
              <h5>
                At the age of 20, he moved to Paris, where he spent most of his
                career and life, surrounded by the leading artists and
                intellectuals of his time. Though he gave only a handful of
                public performances, Chopin was known for his private salon
                recitals and highly expressive piano compositions, many of which
                drew inspiration from Polish folk music, dances like the mazurka
                and polonaise, and the rich, lyrical qualities of the human
                voice.
              </h5>
              <br />
              <h5>
                His works, characterized by their technical complexity and
                emotional depth, include nocturnes, preludes, ballades, and
                études that continue to be staples of the piano repertoire
              </h5>
              <br />
              <h5>
                {" "}
                Chopin’s delicate health and introverted nature marked his
                personal life as much as his music. He was romantically involved
                with the French writer George Sand (Aurore Dupin), a
                relationship that lasted nearly a decade and influenced much of
                his creative output.{" "}
              </h5>
              <br />
              <h5>
                Chopin’s health deteriorated due to chronic illness, and he died
                in Paris at the age of 39, likely from complications related to
                tuberculosis. Despite his relatively short life, Chopin’s impact
                on classical music has been profound. His innovative use of
                harmony, phrasing, and form revolutionized piano composition,
                and his ability to convey deep emotion and nuance through music
                has made him an enduring figure in the canon of Western
                classical music.
              </h5>

              <button className="mt-4 btn btn-success mb-0">VIEW LEARNING MATERIAL</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InnerSection;
