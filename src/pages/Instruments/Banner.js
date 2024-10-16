import React, { useEffect } from "react";
const Banner = () => {
  const InstrumentBannerStyle = {
		backgroundColor: "#e9a035",
		height: "36vh",
		display:'flex',
		justifyContent: 'center',
		alignItems:'center'
	};
	return (
		<React.Fragment>
			<div style={InstrumentBannerStyle}>
				<div className="text-center">
					<h1 className="text-white fw-bold">Get to know your Instruments</h1>
					<div className="container px-5">
						<h4 className="text-white fw-semibold">
            Ebitat faccum volupid eos as as maximaio. Nam fugit, qui omnis aut la velictis cumet unt.
            Et adipicia qui od molupta sintist et dolupti stempore omniaspiente oditas.
						</h4>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Banner;
