import React from 'react'
import { Container } from '@chakra-ui/react'

import { Graphic } from './Graphic'
import { GraphicForm } from './GraphicForm'

export const GraphicBuilder = () => {
	return (
		<Container>
			<Graphic />
			<GraphicForm />
		</Container>
	)
}
