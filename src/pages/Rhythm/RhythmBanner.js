import React, { useEffect, } from "react";
import { Button, Col, Input, Row } from "reactstrap";
import { useGetRhythmBannerQuery } from "../../ReduxStore/rtk";
import PageLoader from "../../Components/Common/PageLoader";

const RhythmBanner = ({ onSearch, onSort }) => {
  const { data, error, isLoading, isFetching, refetch } =
    useGetRhythmBannerQuery({ area: "Yellow", page: "Rhythm" });

  useEffect(() => {
    refetch();
  }, []);
  return (
    <React.Fragment>
      {isLoading || isFetching ? <PageLoader /> : null}
      <div className="w-100 position-relative">
        <h1 className="text-center text-black position-absolute top-50 start-50 translate-middle fw-extrabold display-4">
          RHYTHM
        </h1>
        <img
          className="w-100 d-lg-block d-none"
          src={`https://localhost:7264${data && data?.Banner}`}
        />
        <img
          className="w-100 d-lg-none d-block"
          src={`https://localhost:7264${data && data?.Banner}`}
        />
      </div>
      <div className="bg-white py-2 px-sm-5 px-2 d-flex justify-content-center">
        <Row className="w-100 align-items-center d-flex justify-content-md-between justify-content-center">
          <Col xxl={2} md={3} className="my-2">
            <div>
              <select
                className="form-select rounded-pill text-center"
                aria-label="Default select example"
                onChange={onSort}
              >
                <option disabled>Select Sort Value</option>
                <option value="">None</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="Year">Year</option>
                <option value="Recent">Recent</option>
              </select>
            </div>
          </Col>
          <Col xxl={3} md={4} className="my-2">
            <Input
              type="text"
              className="form-control rounded-pill text-center"
              id="exampleInputrounded"
              placeholder="Search"
              onChange={onSearch}
            />
          </Col>
          <Col xl={2} md={3} className="my-2">
            <Button className="bg-transparent border-0 text-muted w-100">
              <span className="fs-5">
                <i className="me-2 mdi mdi-filter-outline"></i> Filter
              </span>
            </Button>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default RhythmBanner;
