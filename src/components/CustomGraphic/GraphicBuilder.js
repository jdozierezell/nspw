import React, { useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'

import { GraphicForm } from './GraphicForm'

export const GraphicBuilder = () => {
	return (
		<Flex>
			<Box h="200px" w="200px" bg="pink">
				Foo
			</Box>
			<Box h="200px" w="200px" bg="green">
				<GraphicForm />
			</Box>
		</Flex>
	)
}
