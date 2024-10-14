import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Row, Col } from "reactstrap";
import WavesurferPlayer from "@wavesurfer/react";
import Mp3 from "../../assets/images/Images-Maestro/Kalimba.mp3";
import RhythmBanner from "./RhythmBanner";
import { useGetRhythmByIdQuery } from "../../ReduxStore/rtk";
import PageLoader from "../../Components/Common/PageLoader";
const RhythmDetails = () => {
  const { cardId } = useParams();
  const { data, error, isLoading, isFetching, refetch } =
    useGetRhythmByIdQuery(cardId);
  const [wavesurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onReady = (ws) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    refetch();
  }, []);
  return (
    <React.Fragment>
      {isLoading || isFetching ? <PageLoader /> : null}
      <RhythmBanner />

      <Container fluid>
        <div className="my-5 mx-md-5 mx-2">
          <h1 className="fw-bold">Visualiser</h1>
          <h1 className="fw-bold">
            {data && data?.ComposerName} - {data && data?.Name}
          </h1>
        </div>

        <Row className="mx-md-5 mx-2">
          <Col lg={4} md={5} className="gx-0">
            <Card className="p-0 rounded-4 me-0 me-md-3">
              <div>
                <img
                  src={`https://localhost:7264${data && data?.Image}`}
                  className="mw-100 h-auto rounded-top-4"
                />
              </div>
              <div className="ms-3">
                <h4 className="my-3 fw-bold">{data && data?.ComposerName}</h4>
                <h4 className="my-3 fw-bold">{data && data?.Name}</h4>
                <h6 className="mb-2">
                  <span className="fw-bold">Year Composed: </span>
                  {data && data?.Year}
                </h6>
                <h6 className="mb-2">
                  <span className="fw-bold">Duration: </span>
                  {data && data?.Type}
                </h6>
                <h6 className="mb-2">
                  <span className="fw-bold">Performed By: </span>
                  {data && data?.Genre}
                </h6>
              </div>
            </Card>
          </Col>
          <Col lg={8} md={7} className="gx-0">
            <div>
              <img
                src={`https://localhost:7264${data && data?.Visualizer}`}
                className="mw-100 h-auto rounded-4"
              />
            </div>
          </Col>
        </Row>
        <Row className="align-items-center my-5 mx-4 bg-light-subtle rounded-pill">
          <Col xs={1}>
            <a
              role="button"
              className="rounded-circle btn-muted"
              onClick={onPlayPause}
            >
              {isPlaying ? (
                <i className="mdi mdi-pause display-6 text-black"></i>
              ) : (
                <i className="mdi mdi-play display-6 text-black"></i>
              )}
            </a>
          </Col>
          <Col xs={11}>
            <div>
              <WavesurferPlayer
                height={30}
                waveColor="#808080"
                progressColor="#F7B84B"
                url={Mp3}
                onReady={onReady}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default RhythmDetails;
