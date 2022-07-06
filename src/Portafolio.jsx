import React from "react";
import { Nav } from "@components/common/Nav/Index";
import { Background } from "@components/Background/Index";
import { HomeSection } from "@components/sections/Home/Index";
import { AboutSection } from "@components/sections/AboutMe/Index";
import { Hamburger } from "./components/common/Hamburger/Index";

export const Portafolio = () => {
	return (
		<>
			<Background>
				<Hamburger />
				<Nav />
				<HomeSection />
			</Background>
			<AboutSection />
		</>
	);
};
