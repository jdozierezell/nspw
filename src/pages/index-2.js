import React, { useState } from 'react'
import { ChakraProvider, Button } from '@chakra-ui/react'
import { HslColorPicker } from 'react-colorful'
import { css } from '@emotion/react'

import { NSPWTheme } from '../theme/NSPWTheme'
import GraphicBuilder from '../components/GraphicBuilder-2'

const Home = () => {
	const [svgBaseColor, setSvgBaseColor] = useState({ h: 252, s: 43, l: 31 })
	const colorPickerCSS = css`
		&.react-colorful {
			height: auto;
		}
		.react-colorful__saturation {
			display: none;
		}
		.react-colorful__hue {
			background: linear-gradient(
				90deg,
				hsl(0, 43%, 31%) 0,
				hsl(60, 43%, 31%) 17%,
				hsl(120, 43%, 31%) 33%,
				hsl(180, 43%, 31%) 50%,
				hsl(240, 43%, 31%) 67%,
				hsl(300, 43%, 31%) 83%,
				hsl(0, 43%, 31%)
			);
		}
	`
	const setColor = ({ h }) => {
		setSvgBaseColor({ ...svgBaseColor, h })
	}
	return (
		<ChakraProvider theme={NSPWTheme}>
			<HslColorPicker
				color={svgBaseColor}
				css={colorPickerCSS}
				onChange={setColor}
			/>
			<GraphicBuilder svgBaseColor={svgBaseColor} />
		</ChakraProvider>
	)
}

export default Home
