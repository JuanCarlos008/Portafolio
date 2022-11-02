import { ServiceCard } from '@/components/ServiceCard/Index'
import './styles.scss'
import React from 'react'
import { MaxContainer } from '@/components/containers/MaxContainer'
import { data } from './data'

export const ServicesSection = () => {
	return (
		<div className='services section' id='servicios'>
			<MaxContainer>
				<div className='services__wrapper'>
					<div className='container'>
						<div className='question'>
							<h2 className='question__title'>¿Qué ofrezco?</h2>
							<p>
								Puedo posicionar, crear, promocionar y optimizar tu sitio web
								para que tenga una mejor visibilidad en los buscadores.
							</p>
						</div>
						<div className='service-cards-wrapper'>
							{data.map((item) => (
								<ServiceCard key={item.id} item={item} />
							))}
						</div>
					</div>
				</div>
			</MaxContainer>
		</div>
	)
}
