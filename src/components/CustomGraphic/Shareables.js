import React from 'react'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'

const shareableCSS = css`
	border: 0.5rem solid #ffffff;
`

export const Shareables = () => {
	return (
		<Container id="graphic">
			<Heading as="h2" m="1rem 0">
				Sharables
			</Heading>
			<Text m="0 0 2em" fontSize="1.2rem">
				Click to download and share the graphics below to spread
				awareness and support for National Suicide Prevention Week.
			</Text>
			<SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
				<a
					href="https://nspw.afsp.org/images/NationalSuicidePreventionWeek_Purple-01.png"
					download="NationalSuicidePreventionWeek.png"
				>
					<StaticImage
						css={shareableCSS}
						src="https://nspw.afsp.org/images/NationalSuicidePreventionWeek_Purple-01.png"
						alt="National Suicide Prevention Week"
					/>
				</a>
				<a
					href="https://nspw.afsp.org/images/SemanaNacionalDeLaPrevencionDelSuicidio_Purple-01.png"
					download="NationalSuicidePreventionWeek.png"
				>
					<StaticImage
						css={shareableCSS}
						src="https://nspw.afsp.org/images/SemanaNacionalDeLaPrevencionDelSuicidio_Purple-01.png"
						alt="Semana nacional de la prevencion del suicidio"
					/>
				</a>
				<a
					href="https://nspw.afsp.org/images/SuicidePreventionBeginsWithAllOfUs_Blue-01_v2.png"
					download="SuicidePreventionBeginsWithAllOfUs.png"
				>
					<StaticImage
						css={shareableCSS}
						src="https://nspw.afsp.org/images/SuicidePreventionBeginsWithAllOfUs_Blue-01_v2.png"
						alt="Suicide Prevention Begins With All Of Us"
					/>
				</a>
				<a
					href="https://nspw.afsp.org/images/TogetherLetsWalk_Walkers_with_Text-01_v2.png"
					download="NationalSuicidePreventionWeek.png"
				>
					<StaticImage
						css={shareableCSS}
						src="https://nspw.afsp.org/images/TogetherLetsWalk_Walkers_with_Text-01_v2.png"
						alt="Together Let's Walk"
					/>
				</a>
			</SimpleGrid>
		</Container>
	)
}
