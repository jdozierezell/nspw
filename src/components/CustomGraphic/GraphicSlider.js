import React from 'react'
import { Box } from '@chakra-ui/react'

import { GraphicBackgroundSwiper } from './GraphicBackgroundSwiper'
import { GraphicStatementSwiper } from './GraphicStatementSwiper'
import { GraphicIllustrationSwiper } from './GraphicIllustrationSwiper'

export const GraphicSlider = ({ activeSwiper, setImageDownload }) => {
	return (
		<Box cursor="pointer">
			{activeSwiper.swiper === 'background' && (
				<GraphicBackgroundSwiper setImageDownload={setImageDownload} />
			)}
			{activeSwiper.swiper === 'statement' && (
				<GraphicStatementSwiper setImageDownload={setImageDownload} />
			)}
			{activeSwiper.swiper === 'illustration' && (
				<GraphicIllustrationSwiper
					setImageDownload={setImageDownload}
				/>
			)}
		</Box>
	)
}
