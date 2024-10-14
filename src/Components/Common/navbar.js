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

const Navbar = () => {
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
          "navbar navbar-expand-lg px-5 navbar-landing sticky-top bg-white " + navClass
        }
        id="navbar"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logodark}
              className="card-logo card-logo-dark d-lg-block d-none"
              alt="logo dark"
              height="30"
            />
            <img
              src={logolightMobile}
              className="card-logo card-logo-light d-lg-none d-block"
              alt="logo light"
              height="30"
            />
          </Link>

          <NavbarToggler
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
            <div className="navbar-nav mx-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink href="/game" className="px-1 mx-1 px-xl-2 mx-xl-2">
                  <img src={Game} alt="Game NavItem" width="80" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="/rhythm" className="px-1 mx-1 px-xl-2 mx-xl-2">
                  <img src={Rhythm} alt="Rhythm NavItem" width="80" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="/instruments" className="px-1 mx-1 px-xl-2 mx-xl-2">
                  <img src={Instruments} alt="Instruments NavItem" width="109" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="#" className="px-1 mx-1 px-xl-2 mx-xl-2">
                  <img src={Composers} alt="Composers NavItem" width="109" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="/watch" className="px-1 mx-1 px-xl-2 mx-xl-2">
                  <img src={Watch} alt="Watch NavItem" width="80" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="/Learn" className="px-1 mx-1 px-xl-2 mx-xl-2">
                  <img src={Learn} alt="Learn NavItem" width="80" />
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
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
