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
			<div class="container py-3">
				<div class="row">
					<div class="col-lg-6 p-0">
						<img
							class="mw-100 h-auto rounded-start-3"
							src={KidViolin} />
					</div>
					<div class="col-lg-6 bg-white rounded-end-3 d-flex justify-content-center align-items-center px-lg-5 py-lg-0 py-3">
						<div class="px-3">
							<small class="text-body-tertiary"> Medici </small>
							<h4 class="fw-semibold mb-2 mb-lg-4 text-dark">
								Gitae. Nequi quos aut a solores Medici
							</h4>
							<h5 class="lh-base text-dark">
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