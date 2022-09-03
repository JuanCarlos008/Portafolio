import { BlurCircles } from '@/components/Background/BlurCircles'
import { MaxContainer } from '@/components/containers/MaxContainer'
import React from 'react'
import { BsFileEarmarkArrowDown } from 'react-icons/bs'
import './styles.scss'

export const HomeSection = () => {
	return (
		<BlurCircles>
			<MaxContainer>
				<section className='home section' id='inicio'>
					<div className='home__wrapper'>
						<div className='home__img'>
							<div className='home__img__box'>
								<img
									className='img-line'
									src='./assets/images/line.svg'
									alt='line image'
								/>
								<img
									className='img-profile'
									src='./assets/images/jc.png'
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
									brindar la mejor experiencia.
								</p>
							</div>

							<button className='home__content__cv'>
								<span className='icon'>
									<BsFileEarmarkArrowDown />
								</span>
								<span className='literal-down'>Descargar</span>
								<span>CV</span>
							</button>
						</div>
					</div>
				</section>
			</MaxContainer>
		</BlurCircles>
	)
}
