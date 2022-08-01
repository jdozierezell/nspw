import React from 'react'
import { css } from '@emotion/react'
import { useMediaQuery } from '@chakra-ui/react'

import Cloud from '../../../static/svgs/cloud.svg'
import SuicidePreventionBeginsWithAllOfUs from '../../../static/svgs/suicidePreventionBeginsWithAllOfUs.svg'
import SuicidePreventionBeginsWithAllOfUsNoBg from '../../../static/svgs/suicidePreventionBeginsWithAllOfUs_no-bg.svg'

const Hero = () => {
	const [isLargerThan1104] = useMediaQuery('(min-width: 1104px)')

	const heroHSL = {
		cloud: 'hsl(198, 50%, 96%)', // cloud: '#f0f7fa'
		textAccent: 'hsl(254, 21%, 48%)', // textAccent: '#6c6094'
		textMain: 'hsl(252, 43%, 31%)', // textMain: '#3c2e72'
		stars: 'hsl(60, 99%, 68%)', // stars: '#fefe5e'
	}

	const heroCSS = css`
		position: relative;
		background: rgb(42, 170, 245);
		background: linear-gradient(
			180deg,
			rgba(42, 170, 245, 1) 0%,
			rgba(47, 37, 92, 1) 100%
		);
		height: calc(100vh - 5em);
		min-height: 700px;
		@media (min-width: 1104px) {
			height: 100vh;
		}
		.cloud {
			fill: ${heroHSL.cloud};
		}
		.textAccent {
			fill: ${heroHSL.textAccent};
		}
		.textMain {
			fill: ${heroHSL.textMain};
		}
		.stars {
			fill: ${heroHSL.stars};
		}
	`
	const cloudSvgCSS = css`
		position: absolute;
		top: 2em;
		left: 1em;
		height: calc(100vh - 16em);
		min-height: 700px;
		width: calc(100vw - 2em);
	`
	const messageSvgCSS = css`
		position: relative;
		width: 80vw;
		left: 10vw;
	`
	const messageSvgNoBgCSS = css`
		position: absolute;
		width: 28vw;
		top: 18%;
		left: calc(8vw + 4em);
	`
	const nspwDatesCSS = css`
		color: #ffffff;
		position: relative;
		font-weight: 800;
		line-height: 1.4em;
		font-family: 'Hoss Round', Arial, sans-serif;
		font-size: 2em;
		width: 66vw;
		right: -17vw;
		padding: 1em 0 2em;
		text-align: center;
		@media (min-width: 1104px) {
			position: absolute;
			color: ${heroHSL.textMain};
			font-size: 3vw;
			letter-spacing: 0.08em;
			width: 33vw;
			top: 28%;
			right: calc(4vw + 4em);
			text-align: left;
			padding-top: 0;
		}
	`

	return (
		<div css={heroCSS}>
			{isLargerThan1104 ? (
				<>
					<Cloud
						css={css`
							${cloudSvgCSS};
						`}
					/>
					<SuicidePreventionBeginsWithAllOfUsNoBg
						css={css`
							${messageSvgNoBgCSS};
						`}
					/>
				</>
			) : (
				<>
					<SuicidePreventionBeginsWithAllOfUs css={messageSvgCSS} />
				</>
			)}
			<h2 css={nspwDatesCSS}>
				September 4 – 10 is National Suicide Prevention Week
			</h2>
		</div>
	)
}

export default Hero
