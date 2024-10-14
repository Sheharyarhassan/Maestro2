import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button, Card, CardBody, Row, Col } from "reactstrap";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import RhythmBanner from "./RhythmBanner";
import { useGetRhythmsMutation } from "../../ReduxStore/rtk";
import PageLoader from "../../Components/Common/PageLoader";

const Index = () => {
  document.title = " Rhythm- Young Maestro";
  const history = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 5; // Number of items per page
  const [allObj, response] = useGetRhythmsMutation();
  console.log("Response:::", response && response);
  const fetchData = async () => {
    const pageStart = (currentPage - 1) * pageSize;
    const fetchObject = {
      Area: "Yellow",
      Page: "Rhythm",
      Search: searchValue,
      PageStart: pageStart,
      PageSize: pageSize,
      Draw: 0,
      direction: sortValue,
    };
    const result = await allObj(fetchObject);

    if (result.data && result.data.recordsTotal) {
      const totalRecords = result.data.recordsTotal;
      setTotalPages(Math.ceil(totalRecords / pageSize));
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    fetchData();
  }, [currentPage, searchValue, sortValue]);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleSearch = (e) => {
    const value = e.target.value;
    if (value.length >= 3) {
      setSearchValue(value);
    } else {
      setSearchValue("");
    }
  };
  const handleSort = (e) => {
    const value = e.target.value;
    if (value) {
      setSortValue(value);
    } else {
      setSortValue("");
    }
  };
  return (
    <React.Fragment>
      {(response && response?.isLoading) || response?.isFetching ? (
        <PageLoader />
      ) : null}
      <RhythmBanner onSearch={handleSearch} onSort={handleSort} />
      <div style={{ backgroundColor: "#68cbef" }}>
        <Container className="py-4">
          {response &&
            response?.data?.data.map((card, k) => (
              <Row className="pt-4" key={k}>
                <Col lg={5}>
                  <Card className="p-0 rounded-4 mb-3 mb-lg-0">
                    <div>
                      <img
                        src={`https://localhost:7264${card.Image}`}
                        className="mw-100 h-75 rounded-top-4"
                      />
                    </div>
                    <h5 className="ms-2 my-4 fw-bold">{card.ComposerName}</h5>
                  </Card>
                </Col>
                <Col lg={7}>
                  <Card className="p-0 rounded-4 mb-0 w-100 h-100">
                    <CardBody>
                      <h4 className="fw-bold">{card.Name}</h4>
                      <div className="d-flex align-items-center pt-4">
                        <div className="w-75">
                          <AudioPlayer
                            className="rounded-pill bg-light"
                            src="http://example.com/audio.mp3"
                            onPlay={(e) => console.log("onPlay")}
                            showSkipControls={false}
                            showJumpControls={false}
                            showFilledVolume={true}
                            showFilledProgress={true}
                            defaultDuration={"5:00"}
                            layout="horizontal-reverse"
                            customAdditionalControls={[]}
                            customVolumeControls={[]}
                            customIcons={{
                              play: <i className="mdi mdi-play text-black"></i>,
                              pause: (
                                <i className="mdi mdi-pause text-black"></i>
                              ),
                            }}
                          />
                        </div>
                        <div className="d-flex justify-content-center w-25">
                          <Link
                            className="bg-warning px-2 py-1  rounded-circle fs-4"
                            to={`/rhythmDetails/${card.Id}`}
                          >
                            <i className="mdi mdi-play text-white"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="pt-5 w-75">
                        <h5 className="mb-1">
                          <span className="fw-mediumdbold">
                            Year Composed:{" "}
                          </span>{" "}
                          {card.Year}
                        </h5>
                        <h5 className="mb-1">
                          <span className="fw-mediumdbold">Duration: </span>
                          {card.Type}
                        </h5>
                        <h5 className="mb-1">
                          <span className="fw-mediumdbold">Performed By: </span>
                          {card.Genre}
                        </h5>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ))}

          {/* Pagination Controls */}
          <div className="d-flex justify-content-center mt-4">
            <Button
              color="light"
              onClick={handlePreviousClick}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <Button
                  key={pageNumber}
                  color={currentPage === pageNumber ? "warning" : "light"}
                  onClick={() => handlePageClick(pageNumber)}
                  className="mx-1"
                >
                  {pageNumber}
                </Button>
              )
            )}
            <Button
              color="light"
              onClick={handleNextClick}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Index;
