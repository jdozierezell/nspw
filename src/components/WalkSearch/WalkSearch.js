import React from 'react'
import { css } from '@emotion/react'
import algoliasearch from 'algoliasearch/lite'
import { Hits, InstantSearch } from 'react-instantsearch-dom'
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'
import Lottie from 'lottie-react'

import CustomMenuSelect from './WalkStateMenu'

import { NSPWTheme } from '../../theme/NSPWTheme'

import walker from '../../../static/icons/646-walking-walkcycle-person-lineal-edited.json'
import dogWalker from '../../../static/icons/647-walking-with-dog-lineal-edited.json'
import wheels from '../../../static/icons/651-disabled-person-lineal-edited.json'

const searchClient = algoliasearch(
	'BONWJFMMRS',
	'dc6a5a451c85739a43419955d7a505c1'
)

const hitTitleCSS = css`
	font-family: hoss-round, sans-serif;
	font-weight: 600;
	font-style: normal;
`
const hitDetailsCSS = css`
	font-family: quasimoda, sans-serif;
	font-weight: 500;
	font-style: normal;
`
const stackCSS = css`
	margin: 2rem;
	@media (min-width: 768) {
		margin: 4rem;
	}
`
const textCSS = css`
	font-family: quasimoda, sans-serif;
	font-weight: 500;
	font-style: normal;
	color: ${NSPWTheme.colors.purple.c700};
	font-size: 1.2rem;
	margin: 0 0 2rem;
`
const walkerCSS = css`
	width: 7rem;
	display: inline-block;
	margin-right: -3.5rem;
`
const wheelsCSS = css`
	width: 7rem;
	display: inline-block;
	margin-right: -2rem;
`
const dogWalkerCSS = css`
	width: 7rem;
	display: inline-block;
`

const Hit = ({ hit }) => {
	return (
		<article>
			<p css={hitTitleCSS}>
				<a href={hit.url} target="_blank" rel="noopener noreferrer">
					{hit.title}
				</a>
			</p>
			<p css={hitDetailsCSS}>
				{hit.date} • {hit.venue}, {hit.city}, {hit.state}
			</p>
		</article>
	)
}

const WalkSearch = () => {
	return (
		<Container id="community-walks" maxW="100vw">
			<Stack css={stackCSS}>
				<Heading as="h2" m="1em 0 0.25em">
					Find a Community Walk
				</Heading>
				<Text css={textCSS}>
					Step into a growing movement of people who walk for a loved
					one lost, people who walk in support of someone struggling,
					people who walk for themselves and people who walk to
					connect with others who understand.
				</Text>
				<Box>
					<Lottie
						css={walkerCSS}
						autoplay={true}
						loop={true}
						animationData={walker}
					></Lottie>
					<Lottie
						css={wheelsCSS}
						autoplay={true}
						loop={true}
						animationData={wheels}
					></Lottie>
					<Lottie
						css={dogWalkerCSS}
						autoplay={true}
						loop={true}
						animationData={dogWalker}
					></Lottie>
				</Box>
			</Stack>
			<InstantSearch
				searchClient={searchClient}
				indexName="donor-drive-walks"
			>
				<CustomMenuSelect attribute="state" limit={60} />

				{/* <WalkStateMenu attribute="state" /> */}
				<Hits hitComponent={Hit} />
			</InstantSearch>
		</Container>
	)
}

export default WalkSearch
