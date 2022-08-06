import React from 'react'
import { Box, Container, SimpleGrid } from '@chakra-ui/react'

export const CTAs = () => {
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
