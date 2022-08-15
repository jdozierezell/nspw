import React from 'react'
import { css } from '@emotion/react'
import { Stage, Layer, Image } from 'react-konva'
import useImage from 'use-image'
import { Box } from '@chakra-ui/react'

export const Graphic = ({ width, imageDownload }) => {
	const sceneWidth = 1080
	const sceneHeight = 1080
	const scale = width / sceneWidth
	const [background] = useImage(imageDownload.background.src)
	const [stars] = useImage(imageDownload.stars.src)
	const [illustration] = useImage(imageDownload.illustration.src)
	const [statement] = useImage(imageDownload.statement.src)
	let statementX = 0
	let statementY = 0
	let statementScale = 1
	if (statement && illustration) {
		console.log(imageDownload.illustration)
		switch (imageDownload.illustration.id) {
			case 'illustrationFaces':
				statementX = imageDownload.statement.faces.x
				statementY = imageDownload.statement.faces.y
				statementScale = imageDownload.statement.faces.scale
				break
			case 'illustrationHands':
				statementX = imageDownload.statement.hands.x
				statementY = imageDownload.statement.hands.y
				statementScale = imageDownload.statement.hands.scale
				break
			case 'illustrationWalkers':
				statementX = imageDownload.statement.walkers.x
				statementY = imageDownload.statement.walkers.y
				statementScale = imageDownload.statement.walkers.scale
				break
		}
	} else if (statement && !illustration) {
		statementX = imageDownload.statement.default.x
		statementY = imageDownload.statement.default.y
		statementScale = imageDownload.statement.default.scale
	}
	console.log(statementX)
	console.log(statementY)
	console.log(statementScale)

	return (
		<Box id="konva-container">
			<Stage
				width={sceneWidth * scale}
				height={sceneHeight * scale}
				scale={{ x: scale, y: scale }}
			>
				<Layer>
					<Image image={background} />
					<Image image={stars} />
					{statement && (
						<Image
							image={statement}
							x={statementX}
							y={statementY}
							scale={{ x: statementScale, y: statementScale }}
						/>
					)}
					<Image image={illustration} />
				</Layer>
			</Stage>
		</Box>
	)
}
