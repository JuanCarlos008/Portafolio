import React from "react";
import "./styles.scss";

export const Background = ({ children, classN }) => {
	return (
		<div className={`bg ${classN ? classN : ""}`}>
			{children}

			<div className='floating-elements'>
				<div className='circle circle--1'></div>
				<div className='circle circle--2'></div>
			</div>
		</div>
	);
};
