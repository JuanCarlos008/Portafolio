import React from "react";
import "./styles.scss";

export const Hamburger = () => {
	return (
		<div className='menu-toggle'>
			<div className='hamburger'>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className='cross'>
				<span></span>
				<span></span>
			</div>
		</div>
	);
};
