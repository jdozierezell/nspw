import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import { NSPWTheme } from '../theme/NSPWTheme'

import Header from '../components/Header'
import Anthem from '../components/anthem'
import WalkSearch from '../components/WalkSearch'
import GraphicBuilder from '../components/GraphicBuilder'
import RealStories from '../components/RealStories'
import EventList from '../components/EventList'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'

import MobileMenuButton from '../components/MobileMenuButton'

const Home = () => {
	return (
		<ChakraProvider resetCSS theme={NSPWTheme}>
			<Header />
			<MobileMenuButton />
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
