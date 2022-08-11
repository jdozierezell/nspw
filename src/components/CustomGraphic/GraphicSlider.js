import React from 'react'
import { Box } from '@chakra-ui/react'

import { GraphicBackgroundSwiper } from './GraphicBackgroundSwiper'
import { GraphicStatementSwiper } from './GraphicStatementSwiper'
import { GraphicIllustrationSwiper } from './GraphicIllustrationSwiper'

export const GraphicSlider = ({ activeSwiper }) => {
	console.log(activeSwiper)
	return (
		<Box>
			{activeSwiper.swiper === 'background' && (
				<GraphicBackgroundSwiper />
			)}
			{activeSwiper.swiper === 'statement' && <GraphicStatementSwiper />}
			{activeSwiper.swiper === 'illustration' && (
				<GraphicIllustrationSwiper />
			)}
		</Box>
	)
}
