import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Box, Button } from '@chakra-ui/react'

import BackgroundClouds from '../../../static/images/builderImages/BackgroundClouds.png'
import BackgroundGreen from '../../../static/images/builderImages/BackgroundGreen.png'
import BackgroundRed from '../../../static/images/builderImages/BackgroundRed.png'
import BackgroundYellow from '../../../static/images/builderImages/BackgroundYellow.png'
import IllustrationFaces from '../../../static/images/builderImages/IllustrationFaces.png'
import IllustrationHands from '../../../static/images/builderImages/IllustrationHands.png'
import IllustrationWalkers from '../../../static/images/builderImages/IllustrationWalkers.png'
import StarsFaces from '../../../static/images/builderImages/StarsFaces.png'
import StarsHands from '../../../static/images/builderImages/StarsHands.png'
import StarsWalkers from '../../../static/images/builderImages/StarsWalkers.png'
import StatementDiaMundialDeLaPrevencionDelSuicidio from '../../../static/images/builderImages/StatementDiaMundialDeLaPrevencionDelSuicidio.png'
import StatementLaPrevencionDelSuicidioComienzaConNosotros from '../../../static/images/builderImages/StatementLaPrevencionDelSuicidioComienzaConNosotros.png'
import StatementNationalSuicidePreventionWeek from '../../../static/images/builderImages/StatementNationalSuicidePreventionWeek.png'
import StatementOutOfTheDarkness from '../../../static/images/builderImages/StatementOutOfTheDarkness.png'
import StatementSemanaNacionalDePrevencionDelSuicidio from '../../../static/images/builderImages/StatementSemanaNacionalDePrevencionDelSuicidio.png'
import StatementSuicidePreventionBeginsWithAllOfUs from '../../../static/images/builderImages/StatementSuicidePreventionBeginsWithAllOfUs.png'
import StatementTogetherLetsWalk from '../../../static/images/builderImages/StatementTogetherLetsWalk.png'
import StatementWalkWithUs from '../../../static/images/builderImages/StatementWalkWithUs.png'
import StatementWorldSuicidePreventionDay from '../../../static/images/builderImages/StatementWorldSuicidePreventionDay.png'

export const Graphic = ({ svg: { background, statement, illustration } }) => {
	const positionCSS = css`
		position: absolute;
		top: 0;
	`
	let sizeCSS = css``
	if (statement === 'StatementNationalSuicidePreventionWeek') {
		if (illustration === 'IllustrationWalkers') {
			sizeCSS = css`
				width: 100%;
				top: 0%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationFaces') {
			sizeCSS = css`
				width: 100%;
				top: 21%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationHands') {
			sizeCSS = css`
				width: 100%;
				top: 44%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (statement === 'StatementSuicidePreventionBeginsWithAllOfUs') {
		if (illustration === 'IllustrationWalkers') {
			console.log(statement)
			console.log(illustration)
			sizeCSS = css`
				width: 52%;
				top: 0%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationFaces') {
			sizeCSS = css`
				width: 50%;
				top: 24%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationHands') {
			sizeCSS = css`
				width: 50%;
				top: 48%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (statement === 'StatementTogetherLetsWalk') {
		if (illustration === 'IllustrationWalkers') {
			sizeCSS = css``
		}
		if (illustration === 'IllustrationFaces') {
			sizeCSS = css`
				width: 80%;
				top: 24%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationHands') {
			sizeCSS = css`
				width: 90%;
				top: 47%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (statement === 'StatementWalkWithUs') {
		if (illustration === 'IllustrationWalkers') {
			sizeCSS = css`
				width: 110%;
				top: 2%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationFaces') {
			sizeCSS = css`
				width: 110%;
				top: 28%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationHands') {
			sizeCSS = css`
				width: 110%;
				top: 50%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (statement === 'StatementWorldSuicidePreventionDay') {
		if (illustration === 'IllustrationWalkers') {
			sizeCSS = css`
				width: 105%;
				top: 0%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationFaces') {
			sizeCSS = css`
				width: 105%;
				top: 24%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationHands') {
			sizeCSS = css`
				width: 105%;
				top: 45%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (statement === 'StatementOutOfTheDarkness') {
		if (illustration === 'IllustrationWalkers') {
			sizeCSS = css`
				width: 78%;
				top: 0%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationFaces') {
			sizeCSS = css`
				width: 80%;
				top: 24%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationHands') {
			sizeCSS = css`
				width: 80%;
				top: 45%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (statement === 'StatementSemanaNacionalDePrevencionDelSuicidio') {
		if (illustration === 'IllustrationWalkers') {
			sizeCSS = css`
				width: 105%;
				top: 2%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationFaces') {
			sizeCSS = css`
				width: 105%;
				top: 26%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationHands') {
			sizeCSS = css`
				width: 105%;
				top: 47%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (
		statement === 'StatementLaPrevencionDelSuicidioComienzaConNosotros'
	) {
		if (illustration === 'IllustrationWalkers') {
			sizeCSS = css`
				width: 84%;
				top: 0%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationFaces') {
			sizeCSS = css`
				width: 73%;
				top: 25%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationHands') {
			sizeCSS = css`
				width: 80%;
				top: 47%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (statement === 'StatementDiaMundialDeLaPrevencionDelSuicidio') {
		if (illustration === 'IllustrationWalkers') {
			sizeCSS = css`
				width: 105%;
				top: 0%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationFaces') {
			sizeCSS = css`
				width: 105%;
				top: 24%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationHands') {
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
			{background === 'BackgroundClouds' && (
				<BackgroundClouds css={positionCSS} />
			)}
			{background === 'BackgroundGreen' && (
				<BackgroundGreen css={positionCSS} />
			)}
			{background === 'BackgroundRed' && (
				<BackgroundRed css={positionCSS} />
			)}
			{background === 'BackgroundYellow' && (
				<BackgroundYellow css={positionCSS} />
			)}
			{illustration === 'IllustrationFaces' && (
				<StarsFaces css={positionCSS} />
			)}
			{illustration === 'IllustrationHands' && (
				<StarsHands css={positionCSS} />
			)}
			{illustration === 'IllustrationWalkers' && (
				<StarsWalkers css={positionCSS} />
			)}
			{statement === 'StatementDiaMundialDeLaPrevencionDelSuicidio' && (
				<StatementDiaMundialDeLaPrevencionDelSuicidio
					css={css`
						${positionCSS};
						${sizeCSS};
					`}
				/>
			)}
			{statement ===
				'StatementLaPrevencionDelSuicidioComienzaConNosotros' && (
				<StatementLaPrevencionDelSuicidioComienzaConNosotros
					css={css`
						${positionCSS};
						${sizeCSS};
					`}
				/>
			)}
			{statement === 'StatementNationalSuicidePreventionWeek' && (
				<StatementNationalSuicidePreventionWeek
					css={css`
						${positionCSS};
						${sizeCSS};
					`}
				/>
			)}
			{statement === 'StatementOutOfTheDarkness' && (
				<StatementOutOfTheDarkness
					css={css`
						${positionCSS};
						${sizeCSS};
					`}
				/>
			)}
			{statement === 'StatementSemanaNacionalDePrevencionDelSuicidio' && (
				<StatementSemanaNacionalDePrevencionDelSuicidio
					css={css`
						${positionCSS};
						${sizeCSS};
					`}
				/>
			)}
			{statement === 'StatementSuicidePreventionBeginsWithAllOfUs' && (
				<StatementSuicidePreventionBeginsWithAllOfUs
					css={css`
						${positionCSS};
						${sizeCSS};
					`}
				/>
			)}
			{statement === 'StatementTogetherLetsWalk' && (
				<StatementTogetherLetsWalk
					css={css`
						${positionCSS};
						${sizeCSS};
					`}
				/>
			)}
			{statement === 'StatementWalkWithUs' && (
				<StatementWalkWithUs
					css={css`
						${positionCSS};
						${sizeCSS};
					`}
				/>
			)}
			{statement === 'StatementWorldSuicidePreventionDay' && (
				<StatementWorldSuicidePreventionDay
					css={css`
						${positionCSS};
						${sizeCSS};
					`}
				/>
			)}
			{illustration === 'IllustrationFaces' && (
				<IllustrationFaces css={positionCSS} />
			)}
			{illustration === 'IllustrationHands' && (
				<IllustrationHands css={positionCSS} />
			)}
			{illustration === 'IllustrationWalkers' && (
				<IllustrationWalkers css={positionCSS} />
			)}
		</Box>
	)
}
