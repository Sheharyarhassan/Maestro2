import React from "react";
import BannerImage from "../../assets/images/Images-Maestro/banner-learn.png";
import BannerImageMobile from "../../assets/images/Images-Maestro/Banner-Learn-Mobile.jpg";

import { Button, Container, Input, Label } from "reactstrap";

const GlossaryBanner = () => {
    return (
        <>
            <div className="w-100 position-relative">
                <h1 className="text-center text-dark position-absolute top-50 start-50 translate-middle fw-extrabold display-4 text-uppercase">glossary</h1>
                <img className="w-100 d-lg-block d-none" src={BannerImage} />
                <img className="w-100 d-lg-none d-block" src={BannerImageMobile} />
            </div>
        </>
    )
}

export default GlossaryBanner