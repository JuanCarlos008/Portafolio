import { BlurCircles } from "@/components/Background/BlurCircles";
import { MaxContainer } from "@/components/containers/MaxContainer";
import { WorkCard } from "@/components/WorkCard/Index";
import React from "react";
import "./styles.scss";

export const ProyectSection = () => {
	return (
		<BlurCircles>
			<div className='proyect section'>
				<MaxContainer>
					<div className='proyect__wrapper'>
						<h2 className='section-title'>Mí experiencia</h2>

						<div className='proyect__cards-wrapper'>
							<WorkCard />
							<WorkCard />
							<WorkCard />
							<WorkCard />
							<WorkCard />
							<WorkCard />
						</div>
					</div>
				</MaxContainer>
			</div>
		</BlurCircles>
	);
};
