import React from 'react'
import { css } from '@emotion/react'
import { Stage, Layer, Image } from 'react-konva'
import useImage from 'use-image'
import { Box } from '@chakra-ui/react'

import backgroundClouds from '../../../static/images/builderImages/backgroundClouds.png'

export const Graphic = ({ width, imageDownload }) => {
	const [background] = useImage(imageDownload.background)
	const [stars] = useImage(imageDownload.stars)
	const [illustration] = useImage(imageDownload.illustration)
	const [statement] = useImage(imageDownload.statement)
	const sceneWidth = 1080
	const sceneHeight = 1080
	const scale = width / sceneWidth
	console.log(imageDownload)
	return (
		<Box id="konva-container">
			<Stage
				width={sceneWidth * scale}
				height={sceneHeight * scale}
				scale={{ x: scale, y: scale }}
			>
				<Layer>
					<Image image={background} />
					<Image image={illustration} />
					<Image image={statement} />
					<Image image={stars} />
				</Layer>
			</Stage>
		</Box>
	)
}
