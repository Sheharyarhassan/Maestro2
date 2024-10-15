import React, { useState, useEffect } from "react";
import {
  Collapse,
  NavbarToggler,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

// Import Images
import logodark from "../../assets/images/Images-Maestro/Young-maestros-logo-linear-black on white.png";
import logolight from "../../assets/images/Images-Maestro/Young-maestros-logo-linear-white on black.png";

import logodarkMobile from "../../assets/images/Images-Maestro/Young-maestros-logo-stacked-black on white-UPDATED.png";
import logolightMobile from "../../assets/images/Images-Maestro/Young-maestros-logo-stacked-white on black-UPDATED.png";

//Menu Images
import Game from "../../assets/images/Images-Maestro/Game.png";
import Rhythm from "../../assets/images/Images-Maestro/Rhythm.png";
import Instruments from "../../assets/images/Images-Maestro/Instruments.png";
import Composers from "../../assets/images/Images-Maestro/Composers.png";
import Watch from "../../assets/images/Images-Maestro/Watch.png";
import Learn from "../../assets/images/Images-Maestro/Learn.png";

const Navbar = ({publicRoute}) => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [navClass, setnavClass] = useState("");

  const toggle = () => setisOpenMenu(!isOpenMenu);
  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  const scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setnavClass("is-sticky");
    } else {
      setnavClass("");
    }
  };

  const [activeLink, setActiveLink] = useState();
  useEffect(() => {
    const activation = (event) => {
      const target = event.target;
      if (target) {
        target.classList.add("active");
        setActiveLink(target);
        if (activeLink && activeLink !== target) {
          activeLink.classList.remove("active");
        }
      }
    };
    const defaultLink = document.querySelector(".navbar li.a.active");
    if (defaultLink) {
      defaultLink?.classList.add("active");
      setActiveLink(defaultLink);
    }
    const links = document.querySelectorAll(".navbar a");
    links.forEach((link) => {
      link.addEventListener("click", activation);
    });
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", activation);
      });
    };
  }, [activeLink]);


  return (
    <React.Fragment>
      <nav
        className={
          "navbar navbar-expand-lg px-xxl-5 px-lg-0 px-xl-3 px-4 py-3 navbar-landing sticky-top bg-white " + navClass
        }
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
{publicRoute ?  <div >
              <Link
                to="/"
                className="btn btn-link fw-bold text-decoration-none text-dark"
              >
                Contact
              </Link>
              {/* <Link to="/register" className="btn btn-success">Sign Up</Link> */}
            </div>

: <> <NavbarToggler
            className="navbar-toggler py-0 fs-20 text-body"
            onClick={toggle}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="mdi mdi-menu"></i>
          </NavbarToggler>

          <Collapse
            isOpen={isOpenMenu}
            className="navbar-collapse text-center"
            id="navbarSupportedContent"
          >
            <div className="navbar-nav mx-auto mt-2 mt-lg-0 align-items-center">
              <li className="nav-item my-2">
              <NavLink
								className="rounded text-white text-uppercase fw-semibold px-3 py-2 d-flex align-items-center me-2"
								style={{backgroundColor: "#41b2d8", height: "fit-content"}}
								href="/hildey">
								Ready to Take a Quiz
							</NavLink>
              </li>
              <li className="nav-item my-2">
              <NavLink
								className="rounded text-uppercase fw-semibold text-white px-3 py-2 d-flex align-items-center me-2"
								style={{backgroundColor: "#1ccb49"}}
								href="/rhythm"
								>Elements of Music
								</NavLink>
              </li>
              <li className="nav-item my-2">
                <NavLink href="/instruments" className="rounded text-uppercase fw-semibold text-white px-3 py-2 d-flex align-items-center me-2"
								style={{backgroundColor: "#e3971d"}}
								>Get to know your instruments
                </NavLink>
              </li>
              <li className="nav-item my-2">
                <NavLink href="#" className=" text-uppercase rounded fw-semibold text-white px-4 py-2 d-flex align-items-center me-2"
								style={{backgroundColor: "#ef5130"}}
								>COMPOSERS
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink href="/watch" className="text-uppercase px-1 mx-1 px-xl-2 mx-xl-2">
                  <img src={Watch} alt="Watch NavItem" width="80" />
                </NavLink>
              </li> */}
              <li className="nav-item my-2">
                <NavLink href="/Learn" 
								className="text-uppercase rounded fw-semibold text-white px-3 py-2 d-flex align-items-center"
								style={{backgroundColor: "#ea8bb8"}}
								>Fun Facts
                </NavLink>
              </li>
            </div>

            <div className="">
              <Link
                to="/login"
                className="btn btn-link fw-bold text-decoration-none text-muted"
              >
                LOGIN
              </Link>
              {/* <Link to="/register" className="btn btn-success">Sign Up</Link> */}
            </div>
          </Collapse>
          </>}
         
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
