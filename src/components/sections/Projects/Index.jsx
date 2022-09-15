import { BlurCircles } from '@/components/Background/BlurCircles'
import { MaxContainer } from '@/components/containers/MaxContainer'
import { WorkCard } from '@/components/WorkCard/Index'
import React from 'react'
import './styles.scss'

export const ProjectSection = () => {
	return (
		<BlurCircles>
			<div className='project section'>
				<MaxContainer>
					<div className='project__wrapper'>
						<h2 className='section-title'>Mí experiencia</h2>

						<div className='project__cards-wrapper'>
							<WorkCard img='./assets/images/projects/project_1.png' />
							<WorkCard img='./assets/images/projects/project_2.png' />
							<WorkCard img='./assets/images/projects/project_3.png' />
							<WorkCard img='./assets/images/projects/project_4.png' />
							<WorkCard img='./assets/images/projects/project_5.png' />
							<WorkCard img='./assets/images/projects/project_6.png' />
						</div>
					</div>
				</MaxContainer>
			</div>
		</BlurCircles>
	)
}
