import React from 'react'
import { css } from '@emotion/react'

import Cloud from '../../../static/svgs/cloud.svg'

const Hero = () => {
	const heroSVG = css`
		position: relative;
		height: 100vh;
		svg {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
		}
	`

	return (
		<div css={heroSVG}>
			<Cloud
				preserveAspectRatio="none"
				css={css`
					fill: hsl(198, 50%, 96%);
				`}
			/>
		</div>
	)
}

export default Hero
