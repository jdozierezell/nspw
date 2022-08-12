import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Box, Button } from '@chakra-ui/react'

import BackgroundTransparent from '../../../static/svgs/customSVGs/BackgroundTransparent.svg'
import BackgroundClouds from '../../../static/svgs/customSVGs/BackgroundClouds.svg'
import BackgroundGreen from '../../../static/svgs/customSVGs/BackgroundGreen.svg'
import BackgroundRed from '../../../static/svgs/customSVGs/BackgroundRed.svg'
import BackgroundYellow from '../../../static/svgs/customSVGs/BackgroundYellow.svg'
import IllustrationFacesSquare from '../../../static/svgs/customSVGs/IllustrationFacesSquare.svg'
import IllustrationHandsSquare from '../../../static/svgs/customSVGs/IllustrationHandsSquare.svg'
import IllustrationWalkersSquare from '../../../static/svgs/customSVGs/IllustrationWalkersSquare.svg'
import IllustrationFacesSquareStars from '../../../static/svgs/customSVGs/IllustrationFacesSquareStars.svg'
import IllustrationHandsSquareStars from '../../../static/svgs/customSVGs/IllustrationHandsSquareStars.svg'
import IllustrationWalkersSquareStars from '../../../static/svgs/customSVGs/IllustrationWalkersSquareStars.svg'
import StatementDiaMundailDeLaPrevencionDelSuicidio from '../../../static/svgs/customSVGs/StatementDiaMundailDeLaPrevencionDelSuicidio.svg'
import StatementLaPrevencionDelSuicidioComienzaConNosotros from '../../../static/svgs/customSVGs/StatementLaPrevencionDelSuicidioComienzaConNosotros.svg'
import StatementNationalSuicidePreventionWeek from '../../../static/svgs/customSVGs/StatementNationalSuicidePreventionWeek.svg'
import StatementOutOfTheDarkness from '../../../static/svgs/customSVGs/StatementOutOfTheDarkness.svg'
import StatementSemanaNacionalDePrevencionDelSuicidio from '../../../static/svgs/customSVGs/StatementSemanaNacionalDePrevencionDelSuicidio.svg'
import StatementSuicidePreventionBeginsWithAllOfUs from '../../../static/svgs/customSVGs/StatementSuicidePreventionBeginsWithAllOfUs.svg'
import StatementTogetherLetsWalk from '../../../static/svgs/customSVGs/StatementTogetherLetsWalk.svg'
import StatementWalkWithUs from '../../../static/svgs/customSVGs/StatementWalkWithUs.svg'
import StatementWorldSuicidePreventionDay from '../../../static/svgs/customSVGs/StatementWorldSuicidePreventionDay.svg'

export const Graphic = ({ svg: { background, statement, illustration } }) => {
	const positionCSS = css`
		position: absolute;
		top: 0;
	`
	console.log(background)
	console.log(statement)
	console.log(illustration)
	let sizeCSS = css``
	if (statement === 'StatementNationalSuicidePreventionWeek') {
		if (illustration === 'IllustrationWalkersSquare') {
			sizeCSS = css`
				width: 100%;
				top: 0%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationFacesSquare') {
			sizeCSS = css`
				width: 100%;
				top: 21%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationHandsSquare') {
			sizeCSS = css`
				width: 100%;
				top: 44%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (statement === 'StatementSuicidePreventionBeginsWithAllOfUs') {
		if (illustration === 'IllustrationWalkersSquare') {
			console.log(statement)
			console.log(illustration)
			sizeCSS = css`
				width: 52%;
				top: 0%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationFacesSquare') {
			sizeCSS = css`
				width: 50%;
				top: 4;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationHandsSquare') {
			sizeCSS = css`
				width: 50%;
				top: 48%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (statement === 'StatementTogetherLetsWalk') {
		if (illustration === 'IllustrationWalkersSquare') {
			sizeCSS = css``
		}
		if (illustration === 'IllustrationFacesSquare') {
			sizeCSS = css`
				width: 80%;
				top: 24%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationHandsSquare') {
			sizeCSS = css`
				width: 93%;
				top: 47%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (statement === 'StatementWalkWithUs') {
		if (illustration === 'IllustrationWalkersSquare') {
			sizeCSS = css`
				width: 110%;
				top: 2%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationFacesSquare') {
			sizeCSS = css`
				width: 110%;
				top: 28%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationHandsSquare') {
			sizeCSS = css`
				width: 110%;
				top: 50%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (statement === 'StatementWorldSuicidePreventionDay') {
		if (illustration === 'IllustrationWalkersSquare') {
			sizeCSS = css`
				width: 105%;
				top: 0%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationFacesSquare') {
			sizeCSS = css`
				width: 105%;
				top: 24%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationHandsSquare') {
			sizeCSS = css`
				width: 105%;
				top: 45%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (statement === 'StatementOutOfTheDarkness') {
		if (illustration === 'IllustrationWalkersSquare') {
			sizeCSS = css`
				width: 78%;
				top: 0%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationFacesSquare') {
			sizeCSS = css`
				width: 80%;
				top: 24%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationHandsSquare') {
			sizeCSS = css`
				width: 80%;
				top: 45%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (statement === 'StatementSemanaNacionalDePrevencionDelSuicidio') {
		if (illustration === 'IllustrationWalkersSquare') {
			sizeCSS = css`
				width: 105%;
				top: 2%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationFacesSquare') {
			sizeCSS = css`
				width: 105%;
				top: 26%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationHandsSquare') {
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
		if (illustration === 'IllustrationWalkersSquare') {
			sizeCSS = css`
				width: 84%;
				top: 0%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationFacesSquare') {
			sizeCSS = css`
				width: 73%;
				top: 25%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationHandsSquare') {
			sizeCSS = css`
				width: 80%;
				top: 47%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	} else if (statement === 'StatementDiaMundailDeLaPrevencionDelSuicidio') {
		if (illustration === 'IllustrationWalkersSquare') {
			sizeCSS = css`
				width: 105%;
				top: 0%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationFacesSquare') {
			sizeCSS = css`
				width: 105%;
				top: 24%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
		if (illustration === 'IllustrationHandsSquare') {
			sizeCSS = css`
				width: 105%;
				top: 47%;
				left: 50%;
				transform: translateX(-50%);
			`
		}
	}
	return (
		<Box textAlign="center">
			<Box position="relative">
				<BackgroundTransparent />
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
				{illustration === 'IllustrationFacesSquare' && (
					<IllustrationFacesSquareStars css={positionCSS} />
				)}
				{illustration === 'IllustrationHandsSquare' && (
					<IllustrationHandsSquareStars css={positionCSS} />
				)}
				{illustration === 'IllustrationWalkersSquare' && (
					<IllustrationWalkersSquareStars css={positionCSS} />
				)}
				{statement ===
					'StatementDiaMundailDeLaPrevencionDelSuicidio' && (
					<StatementDiaMundailDeLaPrevencionDelSuicidio
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
				{statement ===
					'StatementSemanaNacionalDePrevencionDelSuicidio' && (
					<StatementSemanaNacionalDePrevencionDelSuicidio
						css={css`
							${positionCSS};
							${sizeCSS};
						`}
					/>
				)}
				{statement ===
					'StatementSuicidePreventionBeginsWithAllOfUs' && (
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
				{illustration === 'IllustrationFacesSquare' && (
					<IllustrationFacesSquare css={positionCSS} />
				)}
				{illustration === 'IllustrationHandsSquare' && (
					<IllustrationHandsSquare css={positionCSS} />
				)}
				{illustration === 'IllustrationWalkersSquare' && (
					<IllustrationWalkersSquare css={positionCSS} />
				)}
			</Box>
		</Box>
	)
}
