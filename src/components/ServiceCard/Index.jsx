import React from "react";
import { ServiceCard } from "./Card";
import { MaxContainer } from "@components/containers/MaxContainer";
import "./styles.scss";
export const ServiceCards = () => {
	return (
		<div className='services section'>
			<MaxContainer>
				<div className='services__wrapper'>
					<h2 className='section-title'>¿Qué ofrezco?</h2>
					<div className='service-cards-wrapper'>
						<ServiceCard />
						<ServiceCard />
						<ServiceCard />
						<ServiceCard />
					</div>
				</div>
			</MaxContainer>
		</div>
	);
};
