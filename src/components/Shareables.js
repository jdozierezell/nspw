import React from 'react'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Heading, Link, SimpleGrid, Text } from '@chakra-ui/react'

const containerCSS = css`
	padding: 1rem 2rem;
	@media (min-width: 768px) {
		padding: 2rem 4rem;
	}
`
const shareableCSS = css`
	border: 0.5rem solid #ffffff;
`

const Shareables = () => {
	return (
		<Container id="graphic" maxW="100vw" css={containerCSS}>
			<Heading as="h2" m="1em 0 0.25em">
				Sharables
			</Heading>
			<Text m="0 0 2em" fontSize="1.2rem">
				Click to download and share the graphics below to spread
				awareness and support for National Suicide Prevention Week.
			</Text>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={10}>
				<a
					href="https://nspw.afsp.org/images/NationalSuicidePreventionWeek_Purple-01.png"
					download="NationalSuicidePreventionWeek"
				>
					<StaticImage
						css={shareableCSS}
						src="https://nspw.afsp.org/images/NationalSuicidePreventionWeek_Purple-01.png"
						alt="National Suicide Prevention Week"
					/>
				</a>
				<a
					href="https://nspw.afsp.org/images/NationalSuicidePreventionWeek_Purple-01.png"
					download="NationalSuicidePreventionWeek"
				>
					<StaticImage
						css={shareableCSS}
						src="https://nspw.afsp.org/images/SemanaNacionalDeLaPrevencionDelSuicidio_Purple-01.png"
						alt="Semana nacional de la prevencion del suicidio"
					/>
				</a>
				<StaticImage
					css={shareableCSS}
					src="https://nspw.afsp.org/images/SuicidePreventionBeginsWithAllOfUs_Blue-01.png"
					alt="Suicide Prevention Begins With All Of Us"
				/>
				<a
					href="https://nspw.afsp.org/images/NationalSuicidePreventionWeek_Purple-01.png"
					download="NationalSuicidePreventionWeek"
				>
					<StaticImage
						css={shareableCSS}
						src="https://nspw.afsp.org/images/TogetherLetsWalk_Walkers_with_Text-01.png"
						alt="Together Let's Walk"
					/>
				</a>
			</SimpleGrid>
		</Container>
	)
}

export default Shareables
