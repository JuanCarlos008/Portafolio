import React from "react";
import { SvgFirstLine } from "../SvgLine/SvgFirstLine";
import { SvgSecondLine } from "../SvgLine/SvgSecondLine";

export const Lines = ({ children }) => {
	return (
		<div className='lines-wrapper'>
			{children}
			<div className='floating-elements'>
				<SvgFirstLine styleClass='floating-line floating-line--1' />
				<SvgSecondLine styleClass='floating-line floating-line--2' />
			</div>
		</div>
	);
};
