import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Box, Button } from '@chakra-ui/react'

import BackgroundTransparent from '../../../static/svgs/customSVGs/BackgroundTransparent.svg'
import BackgroundClouds from '../../../static/svgs/customSVGs/BackgroundClouds.svg'
import BackgroundGreen from '../../../static/svgs/customSVGs/BackgroundGreen.svg'
import BackgroundRed from '../../../static/svgs/customSVGs/BackgroundRed.svg'
import BackgroundYellow from '../../../static/svgs/customSVGs/BackgroundYellow.svg'
import StatementDiaMundailDeLaPrevencionDelSuicidio from '../../../static/svgs/customSVGs/StatementDiaMundailDeLaPrevencionDelSuicidio.svg'
import StatementLaPrevencionDelSuicidioComienzaConNosotros from '../../../static/svgs/customSVGs/StatementLaPrevencionDelSuicidioComienzaConNosotros.svg'
import StatementNationalSuicidePreventionWeek from '../../../static/svgs/customSVGs/StatementNationalSuicidePreventionWeek.svg'
import StatementOutOfTheDarkness from '../../../static/svgs/customSVGs/StatementOutOfTheDarkness.svg'
import StatementSemanaNacionalDePrevencionDelSuicidio from '../../../static/svgs/customSVGs/StatementSemanaNacionalDePrevencionDelSuicidio.svg'
import StatementSuicidePreventionBeginsWithAllOfUs from '../../../static/svgs/customSVGs/StatementSuicidePreventionBeginsWithAllOfUs.svg'
import StatementTogetherLetsTalk from '../../../static/svgs/customSVGs/StatementTogetherLetsTalk.svg'
import StatementWalkWithUs from '../../../static/svgs/customSVGs/StatementWalkWithUs.svg'
import StatementWorldSuicidePreventionDay from '../../../static/svgs/customSVGs/StatementWorldSuicidePreventionDay.svg'
import IllustrationFacesSquare from '../../../static/svgs/customSVGs/IllustrationFacesSquare.svg'
import IllustrationHandsSquare from '../../../static/svgs/customSVGs/IllustrationHandsSquare.svg'
import IllustrationWalkersSquare from '../../../static/svgs/customSVGs/IllustrationWalkersSquare.svg'

export const Graphic = ({ svg: { background, statement, illustration } }) => {
	const graphicCSS = css`
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	`
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
			</Box>
		</Box>
	)
}
