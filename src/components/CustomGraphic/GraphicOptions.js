import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

import { GraphicBackgroundSwiper } from './GraphicBackgroundSwiper'
import { GraphicStatementSwiper } from './GraphicStatementSwiper'
import { GraphicIllustrationSwiper } from './GraphicIllustrationSwiper'

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
		next: 'illustration',
		prev: 'background',
	}
	const illustration = {
		label: 'Select an Illustration',
		swiper: 'illustration',
		next: '',
		prev: 'statement',
	}

	const [activeSwiper, setActiveSwiper] = useState(background)
	const [prevButton, setPrevButton] = useState(background)
	const [nextButton, setNextButton] = useState(statement)

	const changeSwiper = swiper => {
		switch (swiper) {
			case 'background':
				setActiveSwiper(background)
				setPrevButton(background)
				setNextButton(statement)
				break
			case 'statement':
				setActiveSwiper(statement)
				setPrevButton(background)
				setNextButton(illustration)
				break
			case 'illustration':
				setActiveSwiper(illustration)
				setPrevButton(statement)
				setActiveSwiper(illustration)
				break
			default:
				setActiveSwiper(background)
				setPrevButton(background)
				setNextButton(statement)
		}
	}

	return (
		<Box>
			<Box>
				{activeSwiper.swiper === 'background' && (
					<GraphicBackgroundSwiper />
				)}
				{activeSwiper.swiper === 'statement' && (
					<GraphicStatementSwiper />
				)}
				{activeSwiper.swiper === 'illustration' && (
					<GraphicIllustrationSwiper />
				)}
			</Box>
			<Flex justifyContent="space-evenly" p="2rem 0">
				{activeSwiper.prev !== '' && (
					<Button
						w="33%"
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
				)}
				{console.log(nextButton.next)}
				{activeSwiper.next !== '' && (
					<Button
						w="33%"
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
				)}
			</Flex>
		</Box>
	)
}
