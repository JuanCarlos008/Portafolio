import { BlurCircles } from '@/components/Background/BlurCircles'
import { MaxContainer } from '@/components/containers/MaxContainer'
import { WorkCard } from '@/components/WorkCard/Index'
import { NewWorkCard } from '@/components/WorkCard/NewWorkCard'
import React from 'react'
import { data } from './data'
import './styles.scss'

export const ProjectSection = () => {
	return (
		<BlurCircles>
			<div className='project section'>
				<MaxContainer>
					<div className='project__wrapper'>
						<h2 className='section-title'>Experiencia</h2>
						<div className='project__cards-wrapper'>
							{data.map((d) => (
								<NewWorkCard data={d} key={data.id} />
							))}
						</div>
					</div>
				</MaxContainer>
			</div>
		</BlurCircles>
	)
}
