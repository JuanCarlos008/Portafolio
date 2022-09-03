import React, { useEffect, useState } from 'react'
import { BsArrowDown } from 'react-icons/bs'
import './styles.scss'

export const DownUpBtn = () => {
	const [isScrolling, setIsScrolling] = useState(false)
	const [section, setSection] = useState('#about')

	useEffect(() => {
		window.onscroll = () => {
			if (window.scrollY > 50) {
				setIsScrolling(true)
				setSection('#home')
			} else {
				setIsScrolling(false)
				setSection('#about')
			}
		}
		return () => (window.onscroll = null)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<a
			href={section}
			className={`down-up-btn ${isScrolling ? 'isScrolling' : ''}`}
		>
			<a href={section}>
				<BsArrowDown />
			</a>
		</a>
	)
}
