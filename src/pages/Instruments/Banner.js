import React, { useEffect } from "react";
import BannerImage from "../../assets/images/Images-Maestro/InstrumentsBanner.png";
import { useGetInstrumentBannerQuery } from "../../ReduxStore/rtk";
import PageLoader from "../../Components/Common/PageLoader";
const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${BannerImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  const { data, error, isLoading, isFetching, refetch } =
    useGetInstrumentBannerQuery({ area: "Yellow", page: "Instrument" });
  useEffect(() => {
    refetch();
  }, []);
  return (
    <>
      {(isLoading && isLoading) || (isFetching && isFetching) ? (
        <PageLoader />
      ) : null}
      <div className="w-100 position-relative">
        <h1 className="text-center text-uppercase text-black position-absolute top-50 start-50 translate-middle fw-extrabold display-4">
          Instrument
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
    </>
  );
};

export default Banner;
