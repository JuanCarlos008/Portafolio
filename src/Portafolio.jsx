import React from "react";
import { Nav } from "@components/common/Nav/Index";

import { HomeSection } from "@components/sections/Home/Index";
import { AboutSection } from "@components/sections/AboutMe/Index";
import { ServicesSection } from "@components/sections/ServiceC/Index";
import { Lines } from "@components/Background/Lines";

export const Portafolio = () => {
	return (
		<div className='app-wrapper'>
			<Nav />
			<HomeSection />
			<Lines>
				<AboutSection />
				<ServicesSection />
			</Lines>
		</div>
	);
};
