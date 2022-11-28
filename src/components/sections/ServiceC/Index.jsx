import { ServiceCard } from '@/components/ServiceCard/Index'
import './styles.scss'
import React from 'react'
import { MaxContainer } from '@/components/containers/MaxContainer'
import { data } from './data'
import { ServiceCard2 } from '@/components/ServiceCard/ServiceCard2'

export const ServicesSection = () => {
	return (
		<div className='services section' id='servicios'>
			<MaxContainer>
				<div className='services__wrapper'>
				<h2 className='section-title'>Servicios</h2>
					<div className='container'>
						{/* <div className='question'>
							<h2 className='question__title'>¿Qué ofrezco?</h2>
							<p>
								Puedo posicionar, crear, promocionar y optimizar tu sitio web
								para que tenga una mejor visibilidad en los buscadores.
							</p>
						</div> */}
						<div className='service-cards-wrapper2'>
							{data.map((item) => (
								<ServiceCard2 key={item.id} item={item} />
							))}
						</div>
					</div>
				</div>
			</MaxContainer>
		</div>
	)
}
