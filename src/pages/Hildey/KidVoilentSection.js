import React from 'react'
import KidViolin from "../../assets/images/Images-Maestro/New Assets/Kids Violin.jpg"
const KidVoilentSection = () => {
    const BackgroundStyle = {
        backgroundColor: '#e3971d'
    }
  return (
    <div>
        <div
			class="p-md-5 py-lg-4 px-lg-3 px-3 py-5 d-flex justify-content-center align-items-center"
			style={BackgroundStyle}>
			<div class="container">
				<div class="row">
					<div class="col-lg-6 p-0">
						<img
							class="mw-100 h-auto rounded-start-3"
							src={KidViolin} />
					</div>
					<div class="col-lg-6 bg-white p-0 rounded-end-3 px-xxl-5">
						<div class="p-xxl-5 ps-md-4 p-2">
							<small class="text-body-tertiary"> Medici </small>
							<h4 class="fw-semibold mb-2 mb-lg-4">
								Gitae. Nequi quos aut a solores Medici
							</h4>
							<h5 class="lh-base">
								Hic tempore rciatiat voluptatum ent quunt ex enis auda quaesti
								dis inctae voluptat omnis dolent molessunt, sincips anturei um
								et Et essi ullatem int. Quae dolupti nciumquo eost maxim
							</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default KidVoilentSection