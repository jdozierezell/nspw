import React from 'react'
import { ChakraProvider, Heading } from '@chakra-ui/react'

import { NSPWTheme } from '../theme/NSPWTheme'

const Home = () => {
	return (
		<ChakraProvider theme={NSPWTheme}>
			{/* <SuicidePreventionBeginsWithAllOfUs
				color={{
					cloud: '#F0F7FA',
					textAccent: '#6C6094',
					textMain: '#3C2E72',
					stars: '#FEFE5E',
				}}
			/> */}
		</ChakraProvider>
	)
}

export default Home
