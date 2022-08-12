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
					disabled={
						activeSwiper.swiper === 'background' ? true : false
					}
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
						changeSwiper('background')
					}}
				>
					Select a Background
				</Button>
				<Button
					disabled={
						activeSwiper.swiper === 'statement' ? true : false
					}
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
						changeSwiper('statement')
					}}
				>
					Select a Statement
				</Button>
				<Button
					disabled={
						activeSwiper.swiper === 'illustration' ? true : false
					}
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
						changeSwiper('illustration')
					}}
				>
					Select an Illustration
				</Button>
			</Flex>
		</Box>
	)
}
