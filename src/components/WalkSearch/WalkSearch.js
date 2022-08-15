import React, { useState } from 'react'
import { css } from '@emotion/react'
import algoliasearch from 'algoliasearch/lite'
import { Script } from 'gatsby'
import { Hits, InstantSearch } from 'react-instantsearch-dom'
import {
	Heading,
	Grid,
	GridItem,
	LinkBox,
	LinkOverlay,
	Text,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { WalkStateMenu } from './WalkStateMenu'

const searchClient = algoliasearch(
	'BONWJFMMRS',
	'dc6a5a451c85739a43419955d7a505c1'
)

const hitsCSS = css`
	ul {
		list-style: none;
		@media (min-width: 768px) {
			margin-left: 2rem;
			margin-right: 2rem;
		}
	}
`
const hitTitleCSS = css`
	font-family: hoss-round, sans-serif;
	font-weight: 600;
	font-style: normal;
	font-size: 1.4rem;
`
const hitDetailsCSS = css`
	font-weight: 500;
	font-style: normal;
	margin: 0 0 1.5rem;
	font-size: 1.2rem;
`
const walkGridCSS = css`
	padding: 1rem 2rem;
	@media (min-width: 768px) {
		padding: 0 4rem;
	}
	&:last-of-type {
		padding: 2rem;
		margin-top: 2rem;
		@media (min-width: 768px) {
			padding-top: 4rem;
			padding-bottom: 4rem;
		}
	}
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
			<Text css={hitDetailsCSS}>
				{hit.date} • {hit.venue}, {hit.city}, {hit.state}
			</Text>
		</LinkBox>
	)
}
export const WalkSearch = () => {
	const [hasQuery, setHasQuery] = useState(false)
	return (
		<InstantSearch
			searchClient={searchClient}
			indexName="donor-drive-walks"
		>
			<Grid
				templateColumns={{ sm: '1fr', md: '2fr' }}
				p="2rem 0"
				id="community-walks"
			>
				<GridItem
					css={walkGridCSS}
					colStart={1}
					colSpan={{ sm: 1, md: 2 }}
					m="2rem 0 0"
				>
					<Heading as="h2">Find a Community Walk</Heading>
				</GridItem>
				<GridItem
					colStart={1}
					colSpan={1}
					w={{ sm: 'calc(100vw - 4rem)', md: 'calc(50vw - 8rem)' }}
					m={{ base: '1rem 2rem', md: '2rem 4rem 0' }}
				>
					<div
						style={{
							padding: '56.25% 0 0 0',
							position: 'relative',
						}}
					>
						<iframe
							src="https://player.vimeo.com/video/689388266?h=e74ad80cec&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
							frameBorder="0"
							allow="autoplay; fullscreen; picture-in-picture"
							allowFullScreen
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								height: '100%',
							}}
							title="AFSP COMM WALK 22 - 30 Sec FINAL - END VO 16x9"
						></iframe>
					</div>
					<Script src="https://player.vimeo.com/api/player.js" />
				</GridItem>
				<GridItem
					colStart={{ sm: 1, md: 2 }}
					colSpan={1}
					w={{ base: 'calc(100vw - 4rem)', md: 'calc(50vw - 8rem)' }}
					m={{ base: '1rem 2rem', md: '1rem 4rem 1rem 2rem' }}
				>
					<Text
						fontWeight="500"
						color="purple.c700"
						fontSize="1.2rem"
						m="0 0 2rem"
					>
						Step into a growing movement of people who walk for a
						loved one lost, people who walk in support of someone
						struggling, people who walk for themselves and people
						who walk to connect with others who understand. Select
						your state from the list below to find a walk near you.
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
						bg="blue.100"
						m={{ base: '2rem 0', md: '2rem 0 0' }}
						p={{ base: '3rem 2rem 2rem', md: '4rem 2rem 3rem' }}
					>
						<Hits css={hitsCSS} hitComponent={Hit} />
					</GridItem>
				)}
			</Grid>
		</InstantSearch>
	)
}
