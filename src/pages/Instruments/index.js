import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import InstrumentModal from "./InstrumentModal";
import Instruments from '../../assets/images/Images-Maestro/New Assets/Instruments - yellow.png'
const Index = () => {
  document.title = "Instruments - Young Maestro";
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[])

  return (
    <React.Fragment>
      <Banner />
      <div style={{ backgroundColor: "#21264c", height: "100%" }}>
        <img src={Instruments} alt="Instrument" className="mw-100 h-auto py-5" role="button" onClick={toggleModal}/>
      </div>
      <InstrumentModal
        isOpen={modalOpen}
        toggle={toggleModal}
      />
    </React.Fragment>
  );
};

export default Index;
