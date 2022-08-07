import React from 'react'
import { css } from '@emotion/react'

import SuicidePreventionBeginsWithAllOfUs from '../../../static/svgs/staticSVGs/suicidePreventionBeginsWithAllOfUs.svg'

// default hex values
// cloud: '#f0f7fa',
// textAccent: '#6c6094',
// textMain: '#3c2e72',
// stars: '#fefe5e',

// default hsl values
// cloud: 'hsl(198, 50%, 96%)e',
// textAccent: 'hsl(254, 21%, 48%)',
// textMain: 'hsl(252, 43%, 31%)',
// stars: 'hsl(60, 99%, 68%)',

export const GraphicBuilder = ({ svgBaseColor }) => {
	const hue = svgBaseColor.h
	const saturation = svgBaseColor.s
	const lightness = svgBaseColor.l

	const svgCSS = css`
		.cloud {
			fill: hsl(${hue - 54}, ${saturation + 19}%, ${lightness + 79}%);
		}
		.textAccent {
			fill: hsl(${hue + 2}, ${saturation - 22}%, ${lightness + 17}%);
		}
		.textMain {
			fill: hsl(${hue}, ${saturation}%, ${lightness}%);
		}
		.stars {
			fill: hsl(${hue - 192}, ${saturation + 56}%, ${lightness + 37}%);
		}
	`

	return <SuicidePreventionBeginsWithAllOfUs css={svgCSS} />
}
