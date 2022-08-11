import React, { useState } from 'react'
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'

import { Graphic } from './Graphic'
import { GraphicDownload } from './GraphicDownload'
import { GraphicOptions } from './GraphicOptions'
import { GraphicSlider } from './GraphicSlider'

export const GraphicBuilder = ({ innerHeight }) => {
	const height = `calc(${innerHeight}px - 5rem)`
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
		<Grid
			templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
			p={{ base: '1rem 2rem', md: '2rem 4rem' }}
			minH="700px"
			justifyItems="center"
		>
			<GridItem
				colStart={1}
				colSpan={1}
				rowStart={1}
				rowSpan={1}
				pos="relative"
				w={{ base: 'calc(100vw - 4rem)', md: 'calc(50vw - 8rem)' }}
			>
				<Graphic />
			</GridItem>
			<GridItem
				colStart={{ base: 1, md: 2 }}
				colSpan={2}
				rowStart={{ base: 2, md: 1 }}
				rowSpan={1}
				pos="relative"
				w={{ base: 'calc(100vw - 4rem)', md: 'calc(50vw - 8rem)' }}
			>
				<GraphicSlider activeSwiper={activeSwiper} />
			</GridItem>
			<GridItem
				colStart={1}
				colSpan={1}
				rowStart={{ base: 3, md: 2 }}
				rowSpan={1}
			>
				<GraphicOptions
					activeSwiper={activeSwiper}
					changeSwiper={changeSwiper}
					prevButton={prevButton}
					nextButton={nextButton}
				/>
			</GridItem>
			<GridItem
				colStart={1}
				colSpan={1}
				rowStart={{ base: 4, md: 2 }}
				rowSpan={1}
			>
				<GraphicDownload />
			</GridItem>
		</Grid>
	)
}
