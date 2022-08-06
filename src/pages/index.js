import React, { useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '../theme/theme'
import { SEO } from '../components/SEO/SEO'
import { Header } from '../components/Header/Header'
import { Hero } from '../components/Hero/Hero'
import { Anthem } from '../components/Anthem/Anthem'
import { WalkSearch } from '../components/WalkSearch/WalkSearch'
// import { CustomGraphic } from '../components/CustomGraphic/CustomGraphic'
// import { CTAs } from '../components/CTAs/CTAs'
import { RealStories } from '../components/RealStories/RealStories'
import { EventList } from '../components/EventList/EventList'
import { AboutNSPW } from '../components/AboutNSPW/AboutNSPW'
import { SocialMedia } from '../components/SocialMedia/SocialMedia'
import { Footer } from '../components/Footer/Footer'

const Home = () => {
	const [innerHeight, setInnerHeight] = useState(0)

	const setHeight = () => {
		setInnerHeight(window.innerHeight)
	}

	useEffect(() => {
		setInnerHeight(window.innerHeight)
		window.addEventListener('resize', setHeight)
		return () => window.removeEventListener('resize', setHeight)
	}, [innerHeight])

	return (
		<>
			<ChakraProvider resetCSS theme={theme}>
				{/* Header complete */}
				<Header innerHeight={innerHeight} />
				{/* Hero complete */}
				<Hero innerHeight={innerHeight} />
				{/* Anthem complete */}
				<Anthem />
				{/* WalkSearch complete */}
				<WalkSearch />
				{/* CustomGraphic in progress */}
				{/* <CustomGraphic /> */}
				{/* CTAs in progress */}
				{/* <CTAs /> */}
				{/* RealStories complete */}
				<RealStories />
				{/* EventList complete */}
				<EventList />
				{/* AboutNSPW complete */}
				<AboutNSPW />
				{/* SocialMedia complete */}
				<SocialMedia />
				{/* Footer complete */}
				<Footer />
			</ChakraProvider>
		</>
	)
}

export const Head = () => {
	return <SEO />
}

export default Home
