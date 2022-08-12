import React from 'react'
import { Box } from '@chakra-ui/react'

import { GraphicBackgroundSwiper } from './GraphicBackgroundSwiper'
import { GraphicStatementSwiper } from './GraphicStatementSwiper'
import { GraphicIllustrationSwiper } from './GraphicIllustrationSwiper'

export const GraphicSlider = ({ activeSwiper, updateSVG }) => {
	return (
		<Box cursor="pointer">
			{activeSwiper.swiper === 'background' && (
				<GraphicBackgroundSwiper updateSVG={updateSVG} />
			)}
			{activeSwiper.swiper === 'statement' && (
				<GraphicStatementSwiper updateSVG={updateSVG} />
			)}
			{activeSwiper.swiper === 'illustration' && (
				<GraphicIllustrationSwiper updateSVG={updateSVG} />
			)}
		</Box>
	)
}
