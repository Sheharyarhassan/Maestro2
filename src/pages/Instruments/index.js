import React, { useEffect, useState,useRef  } from "react";
import Banner from "./Banner";
import InstrumentModal from "./InstrumentModal";
import Instruments from '../../assets/images/Images-Maestro/New Assets/Instruments - yellow.png'
import audioFile from '../../assets/images/Images-Maestro/New Assets/INSTRUMENTS.mp3'
import { Container } from "reactstrap";
const Index = () => {
  document.title = "Instruments - Young Maestro";
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);
  const audioRef = useRef(null);

  useEffect(() => {  
    const handlePlay = async () => {  
      try {  
          audioRef.current.muted = false;
      } catch (error) {  
        console.error("Audio playback failed:", error);  
      }  
    };  

    handlePlay();  
  }, []);  

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[])

  return (
    <React.Fragment>
      <Banner />
      <audio ref={audioRef} src={audioFile} muted autoPlay/>
      <div style={{ backgroundColor: "#21264c", height: "100%" }}>
        <Container>
          <img src={Instruments} alt="Instrument" className="mw-100 h-auto py-5" role="button" onClick={toggleModal}/>
        </Container>
      </div>
      <InstrumentModal
        isOpen={modalOpen}
        toggle={toggleModal}
      />
    </React.Fragment>
  );
};

export default Index;
