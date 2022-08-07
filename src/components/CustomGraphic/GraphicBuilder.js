import React, { useState } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

// import { Graphic } from './Graphic'
import { GraphicForm } from './GraphicForm'

import SuicidePreventionBeginsWithAllOfUs from '../../../static/svgs/staticSVGs/suicidePreventionBeginsWithAllOfUs.svg'

export const GraphicBuilder = () => {
	return (
		<Grid columns={{ sm: '1fr', md: '1fr 1fr' }}>
			<GridItem colStart={1} colSpan={1}>
				{/* <Graphic SVG={SuicidePreventionBeginsWithAllOfUs} /> */}
			</GridItem>
			<GridItem>
				<GraphicForm colStart={[1, 2]} colSpan={1} />
			</GridItem>
		</Grid>
	)
}
