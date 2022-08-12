import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

import { theme } from '../../theme/theme'

export const GraphicOptions = ({
	activeSwiper,
	changeSwiper,
	prevButton,
	nextButton,
}) => {
	return (
		<Box>
			<Flex justifyContent="space-evenly" wrap="wrap" gap="1rem">
				<Button
					disabled={activeSwiper.prev !== '' ? false : true}
					minW="33%"
					leftIcon={<ArrowLeftIcon h={4} />}
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
						changeSwiper(activeSwiper.prev)
					}}
				>
					{prevButton.label}
				</Button>
				<Button
					disabled={activeSwiper.next !== '' ? false : true}
					minW="33%"
					rightIcon={<ArrowRightIcon h={4} />}
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
						changeSwiper(activeSwiper.next)
					}}
				>
					{nextButton.label}
				</Button>
			</Flex>
		</Box>
	)
}
