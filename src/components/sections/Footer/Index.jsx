import { MaxContainer } from "@/components/containers/MaxContainer";
import React from "react";
import "./styles.scss";

export const Footer = () => {
	return (
		<footer className='footer-wrapper'>
			<MaxContainer>
				<div className='footer-content'>
					<div className='info-contact'>
						<div className='info-contact__item'>
							<div className='info-contact__item__title'>
								<span>Juan Carlos H.S</span>
							</div>
							<div className='info-contact__item__info'>
								<p>
									Desarrollador web <br /> Frontend
								</p>
							</div>
						</div>
						<div className='info-contact__item'>
							<div className='info-contact__item__title'>
								<span>Github</span>
							</div>
							<div className='info-contact__item__info'>
								<p>https://github.com/JuanCarlos008</p>
							</div>
						</div>
						<div className='info-contact__item'>
							<div className='info-contact__item__title'>
								<span>Linkedin</span>
							</div>
							<div className='info-contact__item__info'>
								<p>www.linkedin.com/in/ juan-carlos008</p>
							</div>
						</div>
						<div className='info-contact__item'>
							<div className='info-contact__item__title'>
								<span>Correo</span>
							</div>
							<div className='info-contact__item__info'>
								<p>juan_carlos008@outlook.com</p>
							</div>
						</div>
					</div>
				</div>
			</MaxContainer>
			<div className='copy-right'>
				<MaxContainer>
					<div className='content'>
						<p>Copyright © 2022 Juan Carlos H.S. All rights reserved.</p>
					</div>
				</MaxContainer>
			</div>
		</footer>
	);
};
