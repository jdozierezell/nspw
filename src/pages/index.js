import React, { useEffect, useState } from 'react'
import { ChakraProvider, Divider } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'

import { NSPWTheme } from '../theme/NSPWTheme'

import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Anthem from '../components/Anthem'
import WalkSearch from '../components/WalkSearch'
import Shareables from '../components/Shareables'
import RealStories from '../components/RealStories'
import EventList from '../components/EventList/EventList'
import SocialMedia from '../components/SocialMedia/SocialMedia'
import Footer from '../components/Footer'

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
			<Helmet>
				<title>National Suicide Prevention Week</title>
				<link
					rel="stylesheet"
					href="https://use.typekit.net/ogc8vre.css"
				></link>
			</Helmet>
			<ChakraProvider resetCSS theme={NSPWTheme}>
				{/* Header complete */}
				<Header innerHeight={innerHeight} />
				{/* Hero complete */}
				<Hero innerHeight={innerHeight} />
				{/* Anthem complete */}
				<Anthem />
				{/* WalkSearch waiting */}
				{/* <WalkSearch /> */}
				{/* Shareables in progress */}
				<Shareables />
				{/* RealStories complete */}
				<RealStories />
				{/* EventList complete */}
				<EventList />
				{/* SocialMedia complete */}
				<SocialMedia />
				{/* Footer complete */}
				<Footer />
			</ChakraProvider>
		</>
	)
}

export default Home
