import React, { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import { NSPWTheme } from '../theme/NSPWTheme'

import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Anthem from '../components/Anthem'
import WalkSearch from '../components/WalkSearch'
import GraphicBuilder from '../components/GraphicBuilder'
import RealStories from '../components/RealStories'
import EventList from '../components/EventList'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'

const Home = () => {
	const [svgBaseColor, setSvgBaseColor] = useState({ h: 252, s: 43, l: 31 })
	return (
		<ChakraProvider resetCSS theme={NSPWTheme}>
			<Header />
			<Hero />
			<Anthem />
			<WalkSearch />
			<GraphicBuilder />
			<RealStories />
			<EventList />
			<SocialMedia />
			<Footer />
		</ChakraProvider>
	)
}

export default Home
