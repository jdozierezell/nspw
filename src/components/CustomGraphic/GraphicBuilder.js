import React, { useState } from 'react'
import { Container, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import { useMeasure } from 'react-use'

import { Graphic } from './Graphic'
import { GraphicDownload } from './GraphicDownload'
import { GraphicOptions } from './GraphicOptions'
import { GraphicSlider } from './GraphicSlider'

import { theme } from '../../theme/theme'

export const GraphicBuilder = () => {
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
	const [imageDownload, setImageDownload] = useState({
		background: '',
		statement: '',
		illustration: '',
		stars: '',
	})

	const [ref, { width, height }] = useMeasure()

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
		<Container>
			<Heading as="h2" m="1rem 0">
				Create Your Own Shareable
			</Heading>
			<Text m="0 0 2em" fontSize="1.2rem" maxW="40rem">
				Just because we're all together, doesn't mean we're all the
				same. Choose a custom background, statement, and illustration to
				create a graphic and message that means the most to you, just
				the way you want it.
			</Text>
			<Grid
				templateColumns={{
					base: '1fr',
					md: 'repeat(2, 1fr)',
					lg: 'repeat(3, 1fr)',
				}}
				p={{ base: '1rem 0', md: '2rem 0 0' }}
				justifyItems="center"
				gap={{ base: '1rem', md: '1rem  3rem', lg: '1rem  6rem' }}
			>
				<GridItem
					colStart={1}
					colSpan={1}
					rowStart={1}
					rowSpan={1}
					pos="relative"
					w={{
						base: 'calc(100vw - 4rem)',
						md: 'calc(51vw - 6rem)',
						lg: 'calc(34vw - 8rem)',
					}}
					ref={ref}
					border={`1px solid ${theme.colors.purple.c700}`}
				>
					<Graphic
						imageDownload={imageDownload}
						width={width}
						height={height}
					/>
				</GridItem>
				<GridItem
					colStart={{ base: 1, md: 2 }}
					colSpan={{ base: 1, lg: 2 }}
					rowStart={{ base: 2, md: 1 }}
					rowSpan={1}
					pos="relative"
					w={{
						base: 'calc(100vw - 4rem)',
						md: 'calc(51vw - 6rem)',
						lg: 'calc(65vw - 12rem)',
					}}
				>
					<GraphicSlider
						activeSwiper={activeSwiper}
						setImageDownload={setImageDownload}
					/>
				</GridItem>
				<GridItem
					colStart={{ base: 1, md: 2 }}
					colSpan={{ base: 1, lg: 2 }}
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
					<GraphicDownload
						imageDownload={imageDownload}
						setImageDownload={setImageDownload}
					/>
				</GridItem>
			</Grid>
		</Container>
	)
}
