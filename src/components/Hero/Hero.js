import React from 'react'
import { css } from '@emotion/react'
import { useMediaQuery, Box, Container, Flex, Heading } from '@chakra-ui/react'

import SuicidePreventionBeginsWithAllOfUs from '../../../static/svgs/staticSVGs/suicidePreventionBeginsWithAllOfUs.svg'

export const Hero = ({ innerHeight }) => {
	const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

	const heroHSL = {
		cloud: 'hsl(198, 50%, 96%)', // cloud: '#f0f7fa'
		textAccent: 'hsl(254, 21%, 48%)', // textAccent: '#6c6094'
		textMain: 'hsl(252, 43%, 31%)', // textMain: '#3c2e72'
		stars: 'hsl(60, 99%, 68%)', // stars: '#fefe5e'
	}
	const svgCSS = css`
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
	return (
		<Flex
			justifyContent="space-around"
			alignItems="center"
			bg="linear-gradient(
					180deg,
					rgba(42, 170, 245, 1) 0%,
					rgba(47, 37, 92, 1) 100%
				)"
			h={`calc(${innerHeight}px - 5rem)`}
			minH="700px"
			wrap={{ base: 'wrap', md: 'nowrap' }}
		>
			<Box w={{ base: '40vh', md: 'calc(40vw - 8rem)' }}>
				<SuicidePreventionBeginsWithAllOfUs css={svgCSS} />
			</Box>
			<Heading
				color="white"
				fontFamily="hoss-round, sans-serif"
				fontWeight="600"
				lineHeight="1.4em"
				fontSize={{ base: '5vh', md: '5vw' }}
				letterSpacing="-1px"
				w={{ base: '66vw', md: 'calc(60vw - 8rem)' }}
				m="2rem 1rem"
				textAlign="center"
			>
				National Suicide Prevention Week {isLargerThan768 && <br />}
				is September {!isLargerThan768 && <br />}4&ndash;10
			</Heading>
		</Flex>
	)
}
