import React, { useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'

import { GraphicForm } from './GraphicForm'

export const GraphicBuilder = ({ innerHeight }) => {
	return (
		<Flex
			justifyContent="space-between"
			alignItems="center"
			wrap={{ base: 'wrap', md: 'nowrap' }}
			p={{ base: '1rem 2rem', md: '2rem 4rem' }}
			h={`calc(${innerHeight}px - 5rem)`}
			minH="700px"
		>
			<Box
				w={{ base: 'calc(100vw - 4rem)', md: 'calc(50vw - 8rem)' }}
				bg="pink"
			>
				Foo
			</Box>
			<Box w={{ base: 'calc(100vw - 4rem)', md: 'calc(50vw - 8rem)' }}>
				<GraphicForm />
			</Box>
		</Flex>
	)
}
