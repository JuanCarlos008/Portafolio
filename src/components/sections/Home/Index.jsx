import { BackProfileLine } from '@/components/Background/BackProfileLine'
import { BlurCircles } from '@/components/Background/BlurCircles'
import { MaxContainer } from '@/components/containers/MaxContainer'
import React from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import './styles.scss'

export const HomeSection = () => {
	return (
		<BlurCircles>
			<MaxContainer>
				<section className='home section' id='inicio'>
					<div className='home__wrapper'>
						<div className='home__img'>
							<div className='home__img__box'>
								<BackProfileLine />
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
									<p>hola!</p>{' '}
									{/* <span className='guess-name'>lisandro</span> */}
									<p>mi nombre es</p>
									<p className='my-name'>juan carlos</p>
								</h1>
							</div>

							<div className='home__content__introduction'>
								<p>
									Soy un entusiasta desarrollador frontend, que siempre está
									buscando la armonía entre lo visual y lo funcional para así
									brindar una mejor experiencia.
								</p>
							</div>

							<button className='home__content__cv disabled'>
								<AiOutlineCloudDownload />
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
