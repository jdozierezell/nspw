import React from 'react'
import { Button, Flex } from '@chakra-ui/react'

import { theme } from '../../theme/theme'

export const GraphicDownload = ({ updateSVG, downloadSVG }) => {
	const download = () => {
		let svgToDownload
		for (const [index, svg] of downloadSVG.entries()) {
			if (index === 0) {
				svgToDownload = svg
			} else {
				for (const [index, child] of svg.childNodes.entries()) {
					console.log(child)
					if (index <= 1) {
						svgToDownload.appendChild(child)
					}
				}
			}
		}
		console.log(svgToDownload)
	}
	return (
		<Flex justifyContent="space-evenly" wrap="wrap" gap="1rem">
			<Button
				minWidth="33%"
				textAlign="center"
				display="inline-block"
				bg="transparent"
				color="purple.c700"
				border={`1px solid ${theme.colors.purple.c700}`}
				fontSize="1.2rem"
				_hover={{
					bg: 'purple.c700',
					color: 'white',
				}}
				onClick={download}
			>
				Download
			</Button>
			<Button
				minWidth="33%"
				textAlign="center"
				display="inline-block"
				bg="transparent"
				color="purple.c700"
				border={`1px solid ${theme.colors.purple.c700}`}
				fontSize="1.2rem"
				_hover={{
					bg: 'purple.c700',
					color: 'white',
				}}
				onClick={updateSVG}
			>
				Reset
			</Button>
		</Flex>
	)
}
