import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import ComposerBg from "../../assets/images/Images-Maestro/New Assets/ComposerBg.png";
// import ComposerImage from "../../assets/images/Images-Maestro/New Assets/ComposerCardImage.png";
// import playbarComposer from "../../assets/images/Images-Maestro/New Assets/playbarComposer.png";
// import ComposerModelImage from "../../assets/images/Images-Maestro/New Assets/CompserModalImage.png";
import ComposerInnerDetailModal from "./ComposerInnerDetailModal";
import { tabContent } from "../Composer/ComposerCategory";
import { useParams } from "react-router-dom";

const InnerSection = () => {
  const mainSectionStyle = {
    backgroundColor: "#f4e652",
  };
  const imageBox = {
    backgroundImage: `url(${ComposerBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  const imageBoxdummy = {
    backgroundImage: `url(${ComposerBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "250px",
  };
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  const { id } = useParams();
  const [composer, setComposer] = useState(null);

  useEffect(() => {
    // Find the composer by ID from your tabContent data
    const numericId = parseInt(id, 10);

    const foundComposer = Object.values(tabContent)
      .flat()
      .find((item) => item.id === numericId);

    setComposer(foundComposer);
  }, [id]);

  if (!composer) {
    return <p>Composer not found!</p>;
  }
  return (
    <div className="mainSection w-100 py-5" style={mainSectionStyle}>
      <Container>
        <Row>
          <Col sm="12">
            <h1 className="text-dark fw-morebold">{composer.ComposerName}</h1>
          </Col>
          <Col lg="5" className="mt-2">
            <div>
              <div className="composerCard">
                <div
                  className="imageBox rounded-top-3 text-center"
                  style={composer.innerImage ? imageBox : imageBoxdummy}
                >
                  {composer.innerImage && (
                    <img
                      src={composer.innerImage}
                      alt="composer"
                      className="w-75 h-auto"
                    />
                  )}
                </div>
                <div className="contentBox bg-white p-3 rounded-bottom-3">
                  <h5 className="text-dark">
                    <span className="fw-morebold">Born:</span> {composer.Born}
                  </h5>
                  <h5 className="text-dark">
                    <span className="fw-morebold">Died:</span> {composer.Died}
                  </h5>
                  <h5 className="text-dark">
                    <span className="fw-morebold">PoB:</span> xxx
                  </h5>
                  <h5 className="text-dark">
                    <span className="fw-morebold">Period:</span> {composer.Name}
                  </h5>
                </div>
              </div>

              <div className="composerVideoCard mt-4" onClick={toggleModal}>
                <h5>Example</h5>
                <img
                  src={composer.ComposerModelImage}
                  className="mw-100 h-auto w-100"
                  alt="composer"
                />
              </div>
              {/* <h5 className="mt-4">Example</h5> */}
              {/* <div className="playBar bg-white px-3 py-1 rounded-5">
                <img
                  src={playbarComposer}
                  alt="playbar"
                  className="mw-100 h-auto"
                />
              </div> */}
            </div>
          </Col>
          <Col lg="7" className="mt-2 bg-white rounded-3">
            <div className="contentCard px-lg-4 px-3 py-5">
              <h5 className="fw-bold text-dark lh-base">{composer.Details}</h5>
              <h5 className="lh-base">
                {" "}
                {composer.innerDetails.split("\n").map((line, index) => (
                  <>
                    <div key={index}>{line}</div> <br />
                  </>
                ))}
              </h5>
              <button
                className="mt-2 btn mb-0 px-4 py-2"
                style={{
                  backgroundColor: "#1ccb49",
                  color: "white",
                  fontSize: "1rem",
                  padding: "0.70rem 1.8rem",
                }}
              >
                VIEW LEARNING MATERIAL
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <ComposerInnerDetailModal isOpen={modalOpen} toggle={toggleModal} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InnerSection;
