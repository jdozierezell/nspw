import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Box, Button, Image } from '@chakra-ui/react'

import backgroundClouds from '../../../static/images/builderImages/backgroundClouds.png'
import backgroundGreen from '../../../static/images/builderImages/backgroundGreen.png'
import backgroundRed from '../../../static/images/builderImages/backgroundRed.png'
import backgroundYellow from '../../../static/images/builderImages/backgroundYellow.png'
import illustrationFaces from '../../../static/images/builderImages/illustrationFaces.png'
import illustrationHands from '../../../static/images/builderImages/illustrationHands.png'
import illustrationWalkers from '../../../static/images/builderImages/illustrationWalkers.png'
import starsFaces from '../../../static/images/builderImages/starsFaces.png'
import starsHands from '../../../static/images/builderImages/starsHands.png'
import starsWalkers from '../../../static/images/builderImages/starsWalkers.png'
import statementDiaMundialDeLaPrevencionDelSuicidio from '../../../static/images/builderImages/statementDiaMundialDeLaPrevencionDelSuicidio.png'
import statementLaPrevencionDelSuicidioComienzaConNosotros from '../../../static/images/builderImages/statementLaPrevencionDelSuicidioComienzaConNosotros.png'
import statementNationalSuicidePreventionWeek from '../../../static/images/builderImages/statementNationalSuicidePreventionWeek.png'
import statementOutOfTheDarkness from '../../../static/images/builderImages/statementOutOfTheDarkness.png'
import statementSemanaNacionalDeLaPrevencionDelSuicidio from '../../../static/images/builderImages/statementSemanaNacionalDeLaPrevencionDelSuicidio.png'
import statementSuicidePreventionBeginsWithAllOfUs from '../../../static/images/builderImages/statementSuicidePreventionBeginsWithAllOfUs.png'
import statementTogetherLetsWalk from '../../../static/images/builderImages/statementTogetherLetsWalk.png'
import statementWalkWithUs from '../../../static/images/builderImages/statementWalkWithUs.png'
import statementWorldSuicidePreventionDay from '../../../static/images/builderImages/statementWorldSuicidePreventionDay.png'

export const Graphic = ({ svg: { background, statement, illustration } }) => {
	const positionCSS = css`
		position: absolute;
		top: 0;
	`
	let sizeCSS = css``
	if (statement === 'statementNationalSuicidePreventionWeek') {
		if (illustration === 'illustrationWalkers') {
			sizeCSS = css`
				width: 100%;
				top: 0%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'illustrationFaces') {
			sizeCSS = css`
				width: 100%;
				top: 21%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'illustrationHands') {
			sizeCSS = css`
				width: 100%;
				top: 44%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (statement === 'statementSuicidePreventionBeginsWithAllOfUs') {
		if (illustration === 'illustrationWalkers') {
			console.log(statement)
			console.log(illustration)
			sizeCSS = css`
				width: 52%;
				top: 0%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'illustrationFaces') {
			sizeCSS = css`
				width: 50%;
				top: 24%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'illustrationHands') {
			sizeCSS = css`
				width: 50%;
				top: 48%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (statement === 'statementTogetherLetsWalk') {
		if (illustration === 'illustrationWalkers') {
			sizeCSS = css``
		}
		if (illustration === 'illustrationFaces') {
			sizeCSS = css`
				width: 80%;
				top: 24%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'illustrationHands') {
			sizeCSS = css`
				width: 90%;
				top: 47%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (statement === 'statementWalkWithUs') {
		if (illustration === 'illustrationWalkers') {
			sizeCSS = css`
				width: 110%;
				top: 2%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'illustrationFaces') {
			sizeCSS = css`
				width: 110%;
				top: 28%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'illustrationHands') {
			sizeCSS = css`
				width: 110%;
				top: 50%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (statement === 'statementWorldSuicidePreventionDay') {
		if (illustration === 'illustrationWalkers') {
			sizeCSS = css`
				width: 105%;
				top: 0%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'illustrationFaces') {
			sizeCSS = css`
				width: 105%;
				top: 24%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'illustrationHands') {
			sizeCSS = css`
				width: 105%;
				top: 45%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (statement === 'statementOutOfTheDarkness') {
		if (illustration === 'illustrationWalkers') {
			sizeCSS = css`
				width: 78%;
				top: 0%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'illustrationFaces') {
			sizeCSS = css`
				width: 80%;
				top: 24%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'illustrationHands') {
			sizeCSS = css`
				width: 80%;
				top: 45%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (
		statement === 'statementSemanaNacionalDeLaPrevencionDelSuicidio'
	) {
		if (illustration === 'illustrationWalkers') {
			sizeCSS = css`
				width: 105%;
				top: 2%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'illustrationFaces') {
			sizeCSS = css`
				width: 105%;
				top: 26%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'illustrationHands') {
			sizeCSS = css`
				width: 105%;
				top: 47%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (
		statement === 'statementLaPrevencionDelSuicidioComienzaConNosotros'
	) {
		if (illustration === 'illustrationWalkers') {
			sizeCSS = css`
				width: 84%;
				top: 0%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'illustrationFaces') {
			sizeCSS = css`
				width: 73%;
				top: 25%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'illustrationHands') {
			sizeCSS = css`
				width: 80%;
				top: 47%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (statement === 'statementDiaMundialDeLaPrevencionDelSuicidio') {
		if (illustration === 'illustrationWalkers') {
			sizeCSS = css`
				width: 105%;
				top: 0%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'illustrationFaces') {
			sizeCSS = css`
				width: 105%;
				top: 24%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'illustrationHands') {
			sizeCSS = css`
				width: 105%;
				top: 47%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	}
	return (
		<Box textAlign="center" position="relative" id="graphicSVG">
			{background === 'backgroundClouds' && (
				<backgroundClouds css={positionCSS} />
			)}
			{background === 'backgroundGreen' && (
				<backgroundGreen css={positionCSS} />
			)}
			{background === 'backgroundRed' && (
				<backgroundRed css={positionCSS} />
			)}
			{background === 'backgroundYellow' && (
				<backgroundYellow css={positionCSS} />
			)}
			{illustration === 'illustrationFaces' && (
				<starsFaces css={positionCSS} />
			)}
			{illustration === 'illustrationHands' && (
				<starsHands css={positionCSS} />
			)}
			{illustration === 'illustrationWalkers' && (
				<starsWalkers css={positionCSS} />
			)}
			{statement === 'statementDiaMundialDeLaPrevencionDelSuicidio' && (
				<statementDiaMundialDeLaPrevencionDelSuicidio
					css={css`
						${positionCSS};
						${sizeCSS};
					`}
				/>
			)}
			{statement ===
				'statementLaPrevencionDelSuicidioComienzaConNosotros' && (
				<statementLaPrevencionDelSuicidioComienzaConNosotros
					css={css`
						${positionCSS};
						${sizeCSS};
					`}
				/>
			)}
			{statement === 'statementNationalSuicidePreventionWeek' && (
				<statementNationalSuicidePreventionWeek
					css={css`
						${positionCSS};
						${sizeCSS};
					`}
				/>
			)}
			{statement === 'statementOutOfTheDarkness' && (
				<statementOutOfTheDarkness
					css={css`
						${positionCSS};
						${sizeCSS};
					`}
				/>
			)}
			{statement ===
				'statementSemanaNacionalDeLaPrevencionDelSuicidio' && (
				<statementSemanaNacionalDeLaPrevencionDelSuicidio
					css={css`
						${positionCSS};
						${sizeCSS};
					`}
				/>
			)}
			{statement === 'statementSuicidePreventionBeginsWithAllOfUs' && (
				<statementSuicidePreventionBeginsWithAllOfUs
					css={css`
						${positionCSS};
						${sizeCSS};
					`}
				/>
			)}
			{statement === 'statementTogetherLetsWalk' && (
				<statementTogetherLetsWalk
					css={css`
						${positionCSS};
						${sizeCSS};
					`}
				/>
			)}
			{statement === 'statementWalkWithUs' && (
				<statementWalkWithUs
					css={css`
						${positionCSS};
						${sizeCSS};
					`}
				/>
			)}
			{statement === 'statementWorldSuicidePreventionDay' && (
				<statementWorldSuicidePreventionDay
					css={css`
						${positionCSS};
						${sizeCSS};
					`}
				/>
			)}
			{illustration === 'illustrationFaces' && (
				<illustrationFaces css={positionCSS} />
			)}
			{illustration === 'illustrationHands' && (
				<illustrationHands css={positionCSS} />
			)}
			{illustration === 'illustrationWalkers' && (
				<illustrationWalkers css={positionCSS} />
			)}
		</Box>
	)
}
