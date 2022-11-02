import { skillsSvgComponent } from '@/components/SvgSkills/Index'

export const data = [
	{
		id: 3,
		title: 'Gigantes del Cibao',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		img: './assets/images/projects/project_3.png',
		web_url: 'https://gigantes.do',
		icons: ['next.js', 'emotionjs']
			.map((item) => skillsSvgComponent.filter((i) => i.title === item))
			.flat(),
	},
	{
		id: 2,
		title: 'LNB Dominicana',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		img: './assets/images/projects/project_2.png',
		web_url: 'http://lnb.do',
		icons: ['next.js', 'emotionjs']
			.map((item) => skillsSvgComponent.filter((i) => i.title === item))
			.flat(),
	},

	{
		id: 4,
		title: 'Track Influencer',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		img: './assets/images/projects/project_4.png',
		web_url: 'https://trackinfluencers.com',
		icons: ['next.js', 'emotionjs']
			.map((item) => skillsSvgComponent.filter((i) => i.title === item))
			.flat(),
	},
	{
		id: 5,
		title: 'Serie del Caribe',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		img: './assets/images/projects/project_5.png',
		web_url: 'https://app.seriedelcaribe.net',
		icons: ['next.js', 'emotionjs']
			.map((item) => skillsSvgComponent.filter((i) => i.title === item))
			.flat(),
	},
	{
		id: 6,
		title: 'Dominicana Ship Yards',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		img: './assets/images/projects/project_6.png',
		web_url: 'https://www.dominicanashipyards.com',
		icons: ['html5', 'css3', 'javascript']
			.map((item) => skillsSvgComponent.filter((i) => i.title === item))
			.flat(),
	},
	{
		id: 1,
		title: 'Portafolio',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		img: './assets/images/projects/project_1.png',
		web_url: 'http://localhost:3000/Portafolio/',
		icons: ['react js', 'sass']
			.map((item) => skillsSvgComponent.filter((i) => i.title === item))
			.flat(),
	},
]
