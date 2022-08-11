import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Box, Button } from '@chakra-ui/react'

import BackgroundTransparent from '../../../static/svgs/customSVGs/BackgroundTransparent.svg'

export const Graphic = ({ SVG, height }) => {
	// const SVG = props.SVG
	// const graphicCSS = css`
	// 	position: absolute;
	// 	top: 0;
	// 	bottom: 0;
	// 	left: 0;
	// 	right: 0;
	// `
	return (
		<Box textAlign="center">
			<Box position="relative">
				<BackgroundTransparent />
				{/* {SVG && <SVG css={graphicCSS}></SVG>} */}
			</Box>
		</Box>
	)
}
