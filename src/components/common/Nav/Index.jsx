import { MaxContainer } from "@/components/containers/MaxContainer";
import { useId } from "react";
import "./styles.scss";

const navPaths = [
	{
		path: "/",
		name: "inicio",
	},
	{
		path: "/sobre-mi",
		name: "sobre mi",
	},
	{
		path: "/portafolio",
		name: "portafolio",
	},
	{
		path: "/contacto",
		name: "contacto",
	},
];

export const Nav = () => {
	return (
		<div className='nav-container'>
			<MaxContainer>
				<div className='nav'>
					<div className='nav__brand'>jc</div>
					<nav className='nav__navigation'>
						{navPaths.map((path) => (
							<a href={path.path} key={useId()}>
								{path.name}
							</a>
						))}
					</nav>
					<div className='nav__cv'>solicitar cv</div>
				</div>
			</MaxContainer>
		</div>
	);
};
