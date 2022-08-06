import React, { useState } from 'react'
import { Container } from '@chakra-ui/react'

import { Graphic } from './Graphic'
import { GraphicForm } from './GraphicForm'

import SuicidePreventionBeginsWithAllOfUs from '../../../static/svgs/suicidePreventionBeginsWithAllOfUs.svg'

export const GraphicBuilder = () => {
	const [colors, setColors] = useState({
		cloud: 'hsl(198, 50%, 96%)',
		textAccent: 'hsl(254, 21%, 48%)',
		textMain: 'hsl(252, 43%, 31%)',
		stars: 'hsl(60, 99%, 68%)',
	})

	return (
		<Container>
			<Graphic SVG={SuicidePreventionBeginsWithAllOfUs} colors={colors} />
			<GraphicForm />
		</Container>
	)
}
