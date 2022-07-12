import React from "react";
import "./styles.scss";

export const BlurCircles = ({ children, classN }) => {
	return (
		<div className='blur-circler'>
			{children}

			<div className='floating-elements'>
				<div className='circle circle--1'></div>
				<div className='circle circle--2'></div>
			</div>
		</div>
	);
};
