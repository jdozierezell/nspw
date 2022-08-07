import React from 'react'
import { css } from '@emotion/react'

import { GraphicBackgroundSwiper } from './GraphicBackgroundSwiper'

export const GraphicOptions = () => {
	const swiperCSS = css`
		width: 200px;
		height: 200px;
	`
	return <GraphicBackgroundSwiper css={swiperCSS} />
}
