import React from 'react'
import { css } from '@emotion/react'
import { useMediaQuery, Flex } from '@chakra-ui/react'

import Cloud from '../../../static/svgs/cloud.svg'
import SuicidePreventionBeginsWithAllOfUs from '../../../static/svgs/suicidePreventionBeginsWithAllOfUs.svg'
import SuicidePreventionBeginsWithAllOfUsNoBg from '../../../static/svgs/suicidePreventionBeginsWithAllOfUs_no-bg.svg'

const Hero = ({ innerHeight }) => {
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
		height: calc(${innerHeight}px - 5rem);
		min-height: 700px;

		@media (min-width: 1104px) {
			margin-top: 0;
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
		margin: 0 auto;
		@media (min-width: 768px) {
			width: 40vw;
			margin: 4rem;
			vertical-align: center;
		}
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
		font-family: hoss-round, sans-serif;
		font-weight: 600;
		font-style: normal;
		line-height: 1.4em;
		font-size: 2em;
		width: 66vw;
		right: -17vw;
		padding: 1em 0 2em;
		text-align: center;
		@media (min-width: 768px) {
			position: absolute;
			font-size: 3vw;
			letter-spacing: 0.08em;
			width: 33vw;
			top: 30%;
			right: calc(4vw + 4em);
			text-align: left;
			padding-top: 0;
		}
	`

	return (
		<Flex css={heroCSS}>
			{isLargerThan1104 ? (
				<SuicidePreventionBeginsWithAllOfUs css={messageSvgCSS} />
			) : (
				<>
					<SuicidePreventionBeginsWithAllOfUs css={messageSvgCSS} />
				</>
			)}
			<h2 css={nspwDatesCSS}>
				National Suicide Prevention Week is September 4 &ndash; 10
			</h2>
		</Flex>
	)
}

export default Hero
