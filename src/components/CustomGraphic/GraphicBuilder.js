import React, { useState } from 'react'
import { Container } from '@chakra-ui/react'

import { Graphic } from './Graphic'
import { GraphicForm } from './GraphicForm'

import SuicidePreventionBeginsWithAllOfUs from '../../../static/svgs/staticSVGs/suicidePreventionBeginsWithAllOfUs.svg'

export const GraphicBuilder = () => {
	return (
		<Container>
			<Graphic SVG={SuicidePreventionBeginsWithAllOfUs} />
			<GraphicForm />
		</Container>
	)
}
