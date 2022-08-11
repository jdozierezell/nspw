import React from 'react'
import { Button } from '@chakra-ui/react'

import { theme } from '../../theme/theme'

export const GraphicDownload = () => {
	return (
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
			onClick={e => {
				console.log('foo')
			}}
		>
			Download
		</Button>
	)
}
