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
import StatementDiaMundailDeLaPrevencionDelSuicidio from '../../../static/svgs/customSVGs/StatementDiaMundailDeLaPrevencionDelSuicidio.svg'
import StatementLaPrevencionDelSuicidioComienzaConNosotros from '../../../static/svgs/customSVGs/StatementLaPrevencionDelSuicidioComienzaConNosotros.svg'
import StatementNationalSuicidePreventionWeek from '../../../static/svgs/customSVGs/StatementNationalSuicidePreventionWeek.svg'
import StatementOutOfTheDarkness from '../../../static/svgs/customSVGs/StatementOutOfTheDarkness.svg'
import StatementSemanaNacionalDePrevencionDelSuicidio from '../../../static/svgs/customSVGs/StatementSemanaNacionalDePrevencionDelSuicidio.svg'
import StatementSuicidePreventionBeginsWithAllOfUs from '../../../static/svgs/customSVGs/StatementSuicidePreventionBeginsWithAllOfUs.svg'
import StatementTogetherLetsTalk from '../../../static/svgs/customSVGs/StatementTogetherLetsTalk.svg'
import StatementWalkWithUs from '../../../static/svgs/customSVGs/StatementWalkWithUs.svg'
import StatementWorldSuicidePreventionDay from '../../../static/svgs/customSVGs/StatementWorldSuicidePreventionDay.svg'

export const Graphic = ({ svg: { background, statement, illustration } }) => {
	const graphicCSS = css`
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	`
	console.log(statement)
	return (
		<Box textAlign="center">
			<Box position="relative">
				<BackgroundTransparent />
				{background === 'BackgroundClouds' && (
					<BackgroundClouds css={graphicCSS} />
				)}
				{background === 'BackgroundGreen' && (
					<BackgroundGreen css={graphicCSS} />
				)}
				{background === 'BackgroundRed' && (
					<BackgroundRed css={graphicCSS} />
				)}
				{background === 'BackgroundYellow' && (
					<BackgroundYellow css={graphicCSS} />
				)}
				{statement ===
					'StatementDiaMundailDeLaPrevencionDelSuicidio' && (
					<StatementDiaMundailDeLaPrevencionDelSuicidio
						css={graphicCSS}
					/>
				)}
				{statement ===
					'StatementLaPrevencionDelSuicidioComienzaConNosotros' && (
					<StatementLaPrevencionDelSuicidioComienzaConNosotros
						css={graphicCSS}
					/>
				)}
				{statement === 'StatementNationalSuicidePreventionWeek' && (
					<StatementNationalSuicidePreventionWeek css={graphicCSS} />
				)}
				{statement === 'StatementOutOfTheDarkness' && (
					<StatementOutOfTheDarkness css={graphicCSS} />
				)}
				{statement ===
					'StatementSemanaNacionalDePrevencionDelSuicidio' && (
					<StatementSemanaNacionalDePrevencionDelSuicidio
						css={graphicCSS}
					/>
				)}
				{statement ===
					'StatementSuicidePreventionBeginsWithAllOfUs' && (
					<StatementSuicidePreventionBeginsWithAllOfUs
						css={graphicCSS}
					/>
				)}
				{statement === 'StatementTogetherLetsTalk' && (
					<StatementTogetherLetsTalk css={graphicCSS} />
				)}
				{statement === 'StatementWalkWithUs' && (
					<StatementWalkWithUs css={graphicCSS} />
				)}
				{statement === 'StatementWorldSuicidePreventionDay' && (
					<StatementWorldSuicidePreventionDay css={graphicCSS} />
				)}
				{illustration === 'IllustrationFacesSquare' && (
					<IllustrationFacesSquare css={graphicCSS} />
				)}
				{illustration === 'IllustrationHandsSquare' && (
					<IllustrationHandsSquare css={graphicCSS} />
				)}
				{illustration === 'IllustrationWalkersSquare' && (
					<IllustrationWalkersSquare css={graphicCSS} />
				)}
			</Box>
		</Box>
	)
}
