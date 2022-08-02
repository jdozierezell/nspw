import React, { useState } from 'react'
import { css } from '@emotion/react'
import algoliasearch from 'algoliasearch/lite'
import { Hits, InstantSearch } from 'react-instantsearch-dom'
import {
	Box,
	Heading,
	Grid,
	GridItem,
	LinkBox,
	LinkOverlay,
	Text,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Lottie from 'lottie-react'

import WalkStateMenu from './WalkStateMenu'

import walker from '../../../static/icons/646-walking-walkcycle-person-lineal-edited.json'
import dogWalker from '../../../static/icons/647-walking-with-dog-lineal-edited.json'
import wheels from '../../../static/icons/651-disabled-person-lineal-edited.json'

const searchClient = algoliasearch(
	'BONWJFMMRS',
	'dc6a5a451c85739a43419955d7a505c1'
)

const hitsCSS = css`
	ul {
		list-style: none;
	}
`
const hitTitleCSS = css`
	font-family: hoss-round, sans-serif;
	font-weight: 600;
	font-style: normal;
	font-size: 1.4rem;
`
const hitDetailsCSS = css`
	font-family: quasimoda, sans-serif;
	font-weight: 500;
	font-style: normal;
	margin: 0 0 1.5rem;
	font-size: 1.2rem;
`
const walkerCSS = css`
	width: 10rem;
	display: inline-block;
	margin-right: -3.5rem;
`
const wheelsCSS = css`
	width: 10rem;
	display: inline-block;
	margin-right: -2rem;
`
const dogWalkerCSS = css`
	width: 10rem;
	display: inline-block;
`

const Hit = ({ hit }) => {
	return (
		<LinkBox>
			<LinkOverlay
				css={hitTitleCSS}
				href={hit.url}
				target="_blank"
				rel="noopener noreferrer"
			>
				{hit.title}{' '}
				<ExternalLinkIcon ml="0.5rem" verticalAlign="text-top" />
			</LinkOverlay>
			<p css={hitDetailsCSS}>
				{hit.date} • {hit.venue}, {hit.city}, {hit.state}
			</p>
		</LinkBox>
	)
}
const WalkSearch = () => {
	const [hasQuery, setHasQuery] = useState(false)
	console.log(hasQuery)
	return (
		<InstantSearch
			searchClient={searchClient}
			indexName="donor-drive-walks"
		>
			<Grid templateColumns={{ sm: '1fr', md: '2fr' }} p="2rem 0">
				<GridItem
					colStart={1}
					colSpan={1}
					p={{ sm: '2rem', md: '2rem 4rem' }}
				>
					<Heading as="h2">Find a Community Walk</Heading>
				</GridItem>
				<GridItem
					colStart={1}
					colSpan={1}
					w={{ sm: '100vw', md: '40vw' }}
					p={{ sm: '2rem', md: '0 2rem' }}
				>
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
				</GridItem>
				<GridItem
					colStart={{ sm: 1, md: 2 }}
					colSpan={1}
					w={{ sm: '100vw', md: '60vw' }}
					p={{ sm: '2rem', md: '0 4rem' }}
				>
					<Text
						fontFamily="quasimoda, sans-serif"
						fontWeight="500"
						color="purple.c700"
						fontSize="1.2rem"
						m="0 0 2rem"
					>
						Step into a growing movement of people who walk for a
						loved one lost, people who walk in support of someone
						struggling, people who walk for themselves and people
						who walk to connect with others who understand.
					</Text>
					<WalkStateMenu
						attribute="state"
						limit={60}
						setHasQuery={setHasQuery}
					/>
				</GridItem>
				{hasQuery && (
					<GridItem
						colStart={1}
						colSpan={{ sm: 1, md: 2 }}
						p={{ sm: '2rem', md: '2rem 4rem' }}
						bg="blue.100"
					>
						<Hits css={hitsCSS} hitComponent={Hit} />
					</GridItem>
				)}
			</Grid>
		</InstantSearch>
	)
}

export default WalkSearch
