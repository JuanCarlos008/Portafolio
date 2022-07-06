import { MaxContainer } from "@/components/containers/MaxContainer";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./styles.scss";

export const HomeSection = () => {
	return (
		<MaxContainer>
			<section className='home section'>
				<div className='home__wrapper'>
					<div className='home__img'>
						<div className='home__img__box'>
							<img
								className='img-line'
								src='/assets/images/line.png'
								alt='line image'
							/>
							<img
								className='img-profile'
								src='/assets/images/jc.png'
								alt='jc image'
							/>
						</div>
					</div>
					<div className='home__content'>
						<div className='home__content__welcome'>
							<h1 className='title'>
								hola! <span className='guess-name'>lisandro</span>
								<br /> mi nombre es <p>juan carlos</p>
							</h1>
						</div>

						<div className='home__content__introduction'>
							<p>
								Soy un entusiasta desarrollador frontend, que siempre está
								buscando la armonía entre lo visual y lo funcional para así
								brindar la mejor experiencia posible a los usuarios.
							</p>
						</div>

						<div className='home__content__buttons'>
							<a
								href='https://github.com/JuanCarlos008'
								target='_blank'
								rel='noopener noreferrer'
								className='button button--github'
							>
								<AiFillGithub />
								<span>github</span>
							</a>
							<a
								href='https://www.linkedin.com/in/juan-carlos008/'
								target='_blank'
								rel='noopener noreferrer'
								className='button button--linkedin'
							>
								<AiFillLinkedin />
								<span>linkedin</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		</MaxContainer>
	);
};
