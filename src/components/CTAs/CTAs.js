import React from 'react'
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'

const CTAs = () => {
	return (
		<Container m={['2rem', '4rem']}>
			<SimpleGrid columns={[1, 3]} gap="1rem">
				<Box>C</Box>
				<Box bg="blue.c100"></Box>
				<Box>A</Box>
			</SimpleGrid>
		</Container>
	)
}

export default CTAs
