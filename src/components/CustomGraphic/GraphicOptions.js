import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Box, Button, Flex } from '@chakra-ui/react'

import { GraphicBackgroundSwiper } from './GraphicBackgroundSwiper'

import { theme } from '../../theme/theme'

export const GraphicOptions = () => {
	const background = {
		label: 'Select a Background',
		swiper: 'background',
		next: 'statement',
		prev: '',
	}
	const statement = {
		label: 'Select a Statement',
		swiper: 'statement',
		next: '',
		prev: 'background',
	}

	const [activeSwiper, setActiveSwiper] = useState(background)
	const [prevButton, setPrevButton] = useState(background)
	const [nextButton, setNextButton] = useState(statement)

	const changeSwiper = swiper => {
		switch (swiper) {
			case 'background':
				setActiveSwiper(background)
				break
			case 'statement':
				setActiveSwiper(statement)
				break
			default:
				setActiveSwiper(background)
		}
	}

	return (
		<Box>
			{activeSwiper.swiper === 'background' && (
				<GraphicBackgroundSwiper />
			)}
			<Flex justifyContent="space-evenly" p="2rem 0">
				{prevButton.swiper !== '' && (
					<Button
						w="33%"
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
				)}
				{console.log(activeSwiper)}
				{nextButton.swiper !== '' && (
					<Button
						w="33%"
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
				)}
			</Flex>
		</Box>
	)
}
