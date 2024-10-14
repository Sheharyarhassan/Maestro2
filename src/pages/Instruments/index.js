import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import InstrumentModal from "./InstrumentModal";
import { useGetInstrumentsMutation } from "../../ReduxStore/rtk";

const Index = () => {
  document.title = "Instruments - Young Maestro";
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedInstrument, setSelectedInstrument] = useState({
    image: "",
    description: "",
    category: "",
    instrument: "",
  });
  const [instruments, setInstruments] = useState([]);
  const [getInstruments] = useGetInstrumentsMutation();

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleImageClick = (image, description, category, instrument) => {
    setSelectedInstrument({ image, description, category, instrument });
    toggleModal();
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchInstruments = async () => {
      try {
        const response = await getInstruments({
          Area: "yellow",
          Page: "instrument",
          Search: "",
          PageStart: 0,
          PageSize: 10,
          Draw: 0,
          direction: "",
        }).unwrap();
        console.log("API Response:", response);
        setInstruments(response.data); // Access the `data` array
      } catch (error) {
        console.error("Error fetching instruments:", error);
      }
    };

    fetchInstruments();
  }, [getInstruments]);

  const groupedInstruments = instruments.reduce((groups, instrument) => {
    const family = instrument.Orchestra; // Assuming 'Orchestra' is the family
    if (!groups[family]) {
      groups[family] = [];
    }
    groups[family].push(instrument);
    return groups;
  }, {});

  const families = Object.keys(groupedInstruments);
  const colors = [
    "#FFD700", // Gold
    "#FF4500", // OrangeRed
    "#1E90FF", // DodgerBlue
    "#32CD32", // LimeGreen
    "#8A2BE2", // BlueViolet
    // Add more colors if needed
  ];

  const totalItems = families.length;
  return (
    <React.Fragment>
      <Banner />
      <div style={{ backgroundColor: "#21264c", height: "180vh" }}>
        <div className="arc-container">
          {families.map((family, index) => (
            <div
              key={family}
              className="family"
              style={{
                transform: `rotate(${index * 5 - 10}deg)`,
                marginBottom: `${Math.sin(
                  (index / totalItems) * 2 * Math.PI
                ) * 2}px`, // Smaller multiplier
                backgroundColor: colors[index % colors.length],
              }}
            >
              {groupedInstruments[family].map((instrument) => (
                <div key={instrument.Id} className="text-center mb-3">
                  <img
                    src={`https://localhost:7264${instrument.Image}`}// Assuming the API returns the image URL
                    alt={instrument.Name}
                    className="img-fluid"
                    role="button"
                    onClick={() =>
                      handleImageClick(
                        `https://localhost:7264${instrument.Image}`,
                        instrument.Synopsis,
                        instrument.Orchestra,
                        instrument.Name
                      )
                    }
                  />
                  <p>{instrument.Name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <InstrumentModal
        isOpen={modalOpen}
        toggle={toggleModal}
        image={selectedInstrument.image}
        description={selectedInstrument.description}
        category={selectedInstrument.category}
        instrument={selectedInstrument.instrument}
      />
    </React.Fragment>
  );
};

export default Index;
