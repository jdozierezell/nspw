import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Box } from '@chakra-ui/react'

export const Graphic = ({ SVG, colors }) => {
	let style
	console.log(SVG.name)
	switch (SVG.name) {
		case 'SuicidePreventionBeginsWithAllOfUs':
			style = css`
				.cloud {
					fill: ${colors.cloud};
				}
				.textAccent {
					fill: ${colors.textAccent};
				}
				.textMain {
					fill: ${colors.textMain};
				}
				.stars {
					fill: ${colors.stars};
				}
			`
	}
	return (
		<Box>
			<SVG css={style} />
		</Box>
	)
}
