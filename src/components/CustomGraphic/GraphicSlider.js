import React from 'react'
import { css } from '@emotion/react'
import { Box } from '@chakra-ui/react'

import { GraphicBackgroundSwiper } from './GraphicBackgroundSwiper'
import { GraphicStatementSwiper } from './GraphicStatementSwiper'
import { GraphicIllustrationSwiper } from './GraphicIllustrationSwiper'

import { theme } from '../../theme/theme'

export const GraphicSlider = ({ activeSwiper, setImageDownload }) => {
	const swiperCSS = css`
		.swiper-button-prev,
		.swiper-button-next {
			color: ${theme.colors.purple.c700};
		}
	`

	return (
		<Box cursor="pointer" css={swiperCSS}>
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
