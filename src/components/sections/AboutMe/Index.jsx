import { MaxContainer } from "@/components/containers/MaxContainer";
import React from "react";
import "./styles.scss";

export const AboutSection = () => {
	return (
		<div className='about section'>
			<MaxContainer>
				<div className='about__wrapper'>
					<h2 className='section-title'>Sobre Mí</h2>

					<div className='about__info'>
						<p>
							En 2021 empecé mi carrera como desarrollador front-end en la
							empresa DUV Agency donde me encargo de todo lo relacionado con las
							UI desde su punto de diseño dando sugerencias hasta el desarrollo
							de los sitios web.
						</p>
						<br />
						<p>
							Sitios web con los cuales posicionamos a los cliente a nivel
							digital cubriendo esa brecha con un buen SEO y optimización de
							contenido para ser mas accesibles a la hora de ser buscados en
							cualquier motor de busqueda.
						</p>
						<br />
						<p>
							Con esto mas que convencido que soy un desarrollador front-end y
							candidato con conocimiento para entender lo que quiere un cliente
							y lo que el empleador necesita en su empresa en una vacante de
							este tipo.
						</p>
					</div>
				</div>
			</MaxContainer>
		</div>
	);
};
