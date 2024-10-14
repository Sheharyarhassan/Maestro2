import React, { useEffect } from "react";

// import Navbar from './navbar';
import Home from "./home";
import Client from "./client";
import Services from "./services";
// import Footer from './footer';

const Index = () => {
  document.title = " Landing- Young Maestro";

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    const element = document.getElementById("back-to-top");
    if (element) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  };

  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
}, []);
  return (
    <React.Fragment>
      <div className="layout-wrapper landing overflow-hidden">
        <Home />
        <Client />
        <Services />
        <button
          onClick={() => toTop()}
          className="btn btn-danger btn-icon landing-back-top"
          id="back-to-top"
        >
          <i className="ri-arrow-up-line"></i>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Index;
