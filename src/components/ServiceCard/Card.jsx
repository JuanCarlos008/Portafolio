import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import "./styles.scss";

export const ServiceCard = () => {
	return (
		<article className='service-card'>
			<div className='service-card__icon'>
				<FaLaptopCode />
			</div>
			<div className='service-card__content'>
				<h2 className='content-title'>Desarrolllo Web Frontend</h2>
				<p className='content-info'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cum
					neque animi tempore sequi officia esse inventore repellat facilis,
					quia fugiat commodi veniam doloremque saepe.
				</p>
			</div>
		</article>
	);
};
