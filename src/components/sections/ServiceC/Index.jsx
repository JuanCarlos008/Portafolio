import { ServiceCard } from '@/components/ServiceCard/Index'
import './styles.scss'
import React from 'react'
import { MaxContainer } from '@/components/containers/MaxContainer'

import { FaLaptopCode } from 'react-icons/fa'
import { TbBrowserCheck } from 'react-icons/tb'
import { AiOutlineFormatPainter } from 'react-icons/ai'
import { CgDisplayFlex } from 'react-icons/cg'
import { SiAiohttp } from 'react-icons/si'

const data = [
	{
		id: 1,
		title: 'Web Development',
		description:
			'We can help you build a website that will help you grow your business.',
		icon: <FaLaptopCode />,
	},
	{
		id: 2,
		title: 'SEO',
		description:
			' We can help you build a website that will help you grow your business.',
		icon: <TbBrowserCheck />,
	},
	{
		id: 3,
		title: 'UI/UX',
		description:
			'We create user-friendly interfaces that are easy to use and intuitive.',
		icon: <AiOutlineFormatPainter />,
	},
	{
		id: 4,
		title: 'Responsive web design',
		description:
			'We create web applications that are user-friendly and easy to use.',
		icon: <CgDisplayFlex />,
	},
	{
		id: 5,
		title: 'Handle APIs',
		description:
			'We create web applications that are user-friendly and easy to use.',
		icon: <SiAiohttp />,
	},
]

export const ServicesSection = () => {
	return (
		<div className='services section' id='servicios'>
			<MaxContainer>
				<div className='services__wrapper'>
					{/* 					<h2 className='section-title'>¿Qué ofrezco?</h2> */}
					<div className='container'>
						<div className='question'>
							<h2 className='question__title'>¿Qué ofrezco?</h2>
							<p>
								Podemos posicionar, promocionar y optimizar tu sitio web para
								que tenga una mejor visibilidad en los buscadores.
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
