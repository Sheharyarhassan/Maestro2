import React, { useState, useEffect } from "react";
import { Collapse, NavbarToggler, NavLink } from "reactstrap";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

// Import Images
import logodark from "../../assets/images/Images-Maestro/Young-maestros-logo-linear-black on white.png";
import logolightMobile from "../../assets/images/Images-Maestro/Young-maestros-logo-stacked-white on black-UPDATED.png";
import Apple from "../../assets/images/Images-Maestro/app-store-icon-black.png";
import Tiktok from "../../assets/images/Images-Maestro/Tiktok-black.png";
import Instagram from "../../assets/images/Images-Maestro/instagram-logo-black.png";
import Facebook from "../../assets/images/Images-Maestro/iconfinder_icon-02_2515845 (2).png";

const Navbar = ({ publicRoute }) => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [navClass, setnavClass] = useState("");

  const location = useLocation(); // Get the current route
  const currentPath = location.pathname; // Extract the path
  // console.log("Location",location);
  const toggle = () => setisOpenMenu(!isOpenMenu);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
    return () => {
      window.removeEventListener("scroll", scrollNavigation); // Cleanup listener
    };
  }, []);

  const scrollNavigation = () => {
    const scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setnavClass("is-sticky");
    } else {
      setnavClass("");
    }
  };
  useEffect(() => {
    const pathName = location.pathname;
    console.log("PathName", pathName);
  }, []);
  return (
    <React.Fragment>
      <nav
        className={`navbar navbar-expand-lg px-xxl-5 px-lg-0 px-xl-3 px-4 py-3 navbar-landing sticky-top bg-white ${navClass}`}
        id="navbar"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logodark}
              className="card-logo card-logo-dark d-xxl-block d-none"
              alt="logo dark"
              height="30"
            />
            <img
              src={logolightMobile}
              className="card-logo card-logo-light d-xxl-none d-block"
              alt="logo light"
              height="30"
            />
          </Link>

          <NavbarToggler
            className="navbar-toggler py-0 fs-20 text-body"
            onClick={toggle}
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="mdi mdi-menu"></i>
          </NavbarToggler>

          <Collapse isOpen={isOpenMenu} className="navbar-collapse text-center">
            {publicRoute ? (
              <div className="navbar-nav mx-auto mt-2 mt-lg-0 align-items-center">
                <li className="nav-item my-2">
                  <NavLink
                    href="/about"
                    className={`rounded-3 fw-bold py-1 px-0 d-flex align-items-center me-2 ${
                      currentPath === "/about" ? "NavAboutActive" : null
                    }`}
                  >
                    <h5 className="fw-morebold mb-0">About Us</h5>
                  </NavLink>
                </li>
                <li className="nav-item my-2">
                  <NavLink
                    href="#"
                    className="rounded-3 px-4 py-1 d-flex align-items-center me-2"
                  >
                    <h5 className="fw-morebold mb-0">Contact</h5>
                  </NavLink>
                </li>
              </div>
            ) : (
              <div className="navbar-nav mx-auto mt-2 mt-lg-0 align-items-center">
                <li className="nav-item my-2">
                  <NavLink
                    href="/game"
                    className="rounded-3 text-white text-uppercase fw-semibold px-4 py-1 d-flex align-items-center me-2"
                    // style={{ backgroundColor: "#41b2d8", height: "fit-content" }}//#41b2d8
                    style={{
                      backgroundColor:
                        currentPath === "/hildey"
                          ? "#41b2d8"
                          : currentPath === "/ludwig"
                          ? "#ed6729"
                          : currentPath === "/wolfgang"
                          ? "#ff283b"
                          : "#41b2d8",
                      height: "fit-content",
                    }} //#41b2d8
                  >
                    Game
                  </NavLink>
                </li>
                <li className="nav-item my-2">
                  <NavLink
                    href="/rhythm"
                    className="rounded-3 text-uppercase fw-semibold text-white px-4 py-1 d-flex align-items-center me-2"
                    style={{
                      backgroundColor:
                        currentPath === "/hildey"
                          ? "#1ccb49"
                          : currentPath === "/ludwig"
                          ? "#a9c47f"
                          : currentPath === "/wolfgang"
                          ? "#479950"
                          : "#1ccb49",
                      height: "fit-content",
                    }} //#1ccb49
                  >
                    Rhythm
                  </NavLink>
                </li>
                <li className="nav-item my-2">
                  <NavLink
                    href="/instruments"
                    className="rounded-3 text-uppercase fw-semibold text-white px-4 py-1 d-flex align-items-center me-2"
                    style={{
                      background:
                        currentPath === "/wolfgang"
                          ? "linear-gradient(90deg, rgba(233,195,53) 0%, rgba(237,106,41) 100%)"
                          : "none",
                      backgroundColor:
                        currentPath === "/hildey"
                          ? "#e3971d"
                          : currentPath === "/ludwig"
                          ? "#e9a035"
                          : currentPath === "/wolfgang"
                          ? "none"
                          : "#e3971d",
                      height: "fit-content",
                    }} //#e3971
                  >
                    Instruments
                  </NavLink>
                </li>
                <li className="nav-item my-2">
                  <NavLink
                    href="/composer"
                    className="text-uppercase rounded-3 fw-semibold text-white px-4 py-1 d-flex align-items-center me-2"
                    style={{
                      backgroundColor:
                        currentPath === "/hildey"
                          ? "#ef5130"
                          : currentPath === "/ludwig"
                          ? "#338cad"
                          : currentPath === "/wolfgang"
                          ? "#003074"
                          : "#ef5130",
                      height: "fit-content",
                    }} //#ef5130
                  >
                    COMPOSERS
                  </NavLink>
                </li>
                <li className="nav-item my-2">
                  <NavLink
                    href="/learn"
                    className="text-uppercase rounded fw-semibold text-white px-4 py-1 d-flex align-items-center"
                    style={{
                      background:
                        currentPath === "/wolfgang"
                          ? "linear-gradient(90deg, rgba(216,19,132,1) 0%, rgba(164,19,132,1) 100%)"
                          : "none",
                      backgroundColor:
                        currentPath === "/hildey"
                          ? "#ea8bb8"
                          : currentPath === "/ludwig"
                          ? "#a790c4"
                          : currentPath === "/wolfgang"
                          ? "transparent"
                          : "#ea8bb8",

                      height: "fit-content",
                    }} //#ea8bb8
                  >
                    Learn
                  </NavLink>
                </li>
              </div>
            )}

            {publicRoute ? (
              <div className="d-flex justify-content-lg-end justify-content-center mt-2">
                <img src={Apple} width="30" className="ms-2" />
                <img src={Tiktok} width="30" className="ms-2" />
                <img src={Instagram} width="30" className="ms-2" />
                <img src={Facebook} width="30" className="ms-2" />
              </div>
            ) : (
              <div>
                <Link
                  to="/login"
                  className="btn btn-link fw-bold text-decoration-none text-muted"
                >
                  LOGIN
                </Link>
              </div>
            )}
          </Collapse>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
