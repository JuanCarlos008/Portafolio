import React from 'react'
import { Nav } from '@components/common/Nav/Index'

import { HomeSection } from '@/components/Sections/Home/Index'
import { AboutSection } from '@/components/Sections/AboutMe/Index'
import { ServicesSection } from '@/components/Sections/ServiceC/Index'
import { Lines } from '@components/Background/Lines'
import { SkillsSection } from '@/components/Sections/Skills/Index'
import { Footer } from '@/components/Sections/Footer/Index'
import { ProjectSection } from './components/Sections/Projects/Index'
import { DownUpBtn } from './components/DownUpBtn/Index'
import { ContactSection } from './components/Sections/Contact/Index'

export const App = () => {
	return (
		<div className='app-wrapper'>
			<DownUpBtn />
			<Nav />
			<HomeSection />
			<Lines>
				<AboutSection />
				<ServicesSection />
				<SkillsSection />
			</Lines>
			<ProjectSection />
			<ContactSection />
			<Footer />
		</div>
	)
}
