import React from "react";
import { skillsSvgComponent } from "../SvgSkills/Index";
import "./styles.scss";

export const WorkCard = () => {
	const icons = ["react js", "javascript", "sass"];
	const proyectIcons = icons
		.map((item) => skillsSvgComponent.filter((i) => i.title === item))
		.flat();
	return (
		<div className='card'>
			<div className='box-img'>
				<img src='https://picsum.photos/360' alt='proyect-image' />
			</div>
			<div className='box-info'>
				<h2 className='box-info__title'>Track Influencer</h2>
				<p className='box-info__paragraph'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
					<a href='#'>Visitar la web</a>
				</p>
				<div className='box-info__icons'>
					{proyectIcons.map((item) => (
						<div className='icon' key={item.title}>
							{item.component}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
