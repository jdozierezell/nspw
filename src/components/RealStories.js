import React from 'react'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import {
	Box,
	Container,
	Heading,
	LinkBox,
	LinkOverlay,
	SimpleGrid,
	Text,
} from '@chakra-ui/react'

const containerCSS = css`
	padding: 0 2rem;
	@media (min-width: 768px) {
		padding: 2rem 4rem;
	}
`
const linkBoxCSS = css`
	border: 1px solid #b1e4ff;
	padding: 1rem;
	border-radius: 5px;
`
const boxCSS = css`
	position: relative;
	margin-bottom: 1rem;
`
const imgCSS = css`
	border-radius: 5px;
`
const authorCSS = css`
	color: #ffffff;
	font-size: 1rem;
	font-family: quasimoda, sans-serif;
	font-weight: 500;
	font-style: normal;
	background-color: rgba(20, 20, 20, 0.7);
	padding: 0.3rem 0.6rem;
	position: absolute;
	bottom: 0;
	left: 0;
	border-radius: 0 5px 0 5px;
	@media (min-width: 768px) {
		font-size: 1.2rem;
		padding: 0.4rem 0.8rem;
	}
`
const linkOverlayCSS = css`
	font-family: hoss-round, sans-serif;
	font-weight: 500;
	font-style: normal;
	font-size: 1.2rem;
	@media (min-width: 768px) {
		font-size: 1.4rem;
	}
`

const RealStories = () => {
	return (
		<Container id="real-stories" css={containerCSS} maxW="100vw">
			<Heading as="h2" m="1em 0">
				Real Stories
			</Heading>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
				<LinkBox css={linkBoxCSS}>
					<Box css={boxCSS}>
						<StaticImage
							css={imgCSS}
							src="https://www.datocms-assets.com/12810/1653405639-erica-mcbeth.jpg?format=webp&crop=faces&fit=crop&h=503&w=960"
							alt="Erica McBeth"
						/>
						<Text css={authorCSS}>By Erica McBeth</Text>
					</Box>
					<LinkOverlay
						css={linkOverlayCSS}
						href="https://afsp.org/story/fighting-loneliness-through-connection"
						target="_blank"
						rel="noopener noreferrer"
					>
						Fighting Loneliness Through Connection
					</LinkOverlay>
				</LinkBox>
				<LinkBox css={linkBoxCSS}>
					<Box css={boxCSS}>
						<StaticImage
							css={imgCSS}
							src="https://www.datocms-assets.com/12810/1646068352-east-end-walk-2021-hope.jpg?format=webp&crop=faces&fit=crop&h=503&w=960"
							alt="HOPE sign attached to a chain-linked fence"
						/>
						<Text css={authorCSS}>By Corinne McDonnell</Text>
					</Box>
					<LinkOverlay
						css={linkOverlayCSS}
						href="https://afsp.org/story/i-walk-because-my-life-is-worth-living"
						target="_blank"
						rel="noopener noreferrer"
					>
						I Walk Because My Life is Worth Living
					</LinkOverlay>
				</LinkBox>
				<LinkBox css={linkBoxCSS}>
					<Box css={boxCSS}>
						<StaticImage
							css={imgCSS}
							src="https://www.datocms-assets.com/12810/1643665842-nancy-blog-pic-2.jpg?format=webp&crop=faces&fit=crop&h=503&w=960"
							alt="Group of four walkers at AFSP Community Walk"
						/>
						<Text css={authorCSS}>By Nancy McGlasson</Text>
					</Box>
					<LinkOverlay
						css={linkOverlayCSS}
						href="https://afsp.org/story/finding-peace-after-a-suicide-one-walker-s-healing-journey-in-nature"
						target="_blank"
						rel="noopener noreferrer"
					>
						Finding Peace After a Suicide: One Walker's Healing
						Journey in Nature
					</LinkOverlay>
				</LinkBox>
				<LinkBox css={linkBoxCSS}>
					<Box css={boxCSS}>
						<StaticImage
							css={imgCSS}
							src="https://www.datocms-assets.com/12810/1639590638-thumbnailimage008.jpeg?format=webp&crop=faces&fit=crop&h=503&w=960"
							alt="Taryn Hiatt"
						/>
						<Text css={authorCSS}>By Taryn Hiatt</Text>
					</Box>
					<LinkOverlay
						css={linkOverlayCSS}
						href="https://afsp.org/story/facing-the-pain"
						target="_blank"
						rel="noopener noreferrer"
					>
						Facing the Pain
					</LinkOverlay>
				</LinkBox>
				<LinkBox css={linkBoxCSS}>
					<Box css={boxCSS}>
						<StaticImage
							css={imgCSS}
							src="https://www.datocms-assets.com/12810/1631163220-fbimg1600611856295.jpg?format=webp&crop=faces&fit=crop&h=503&w=960"
							alt="Tammy Lundy"
						/>
						<Text css={authorCSS}>By Tammy Lundy</Text>
					</Box>
					<LinkOverlay
						css={linkOverlayCSS}
						href="https://afsp.org/story/empathy-and-pain-and-hope-finding-connection-through-the-out-of-the-darkness-walk"
						target="_blank"
						rel="noopener noreferrer"
					>
						Empathy and Pain and Hope: Finding Connection Through
						the Out of the Darkness Walks
					</LinkOverlay>
				</LinkBox>
				<LinkBox css={linkBoxCSS}>
					<Box css={boxCSS}>
						<StaticImage
							css={imgCSS}
							src="https://www.datocms-assets.com/12810/1595604887-kevinpoelcher.jpg?format=webp&crop=faces&fit=crop&h=503&w=960"
							alt="Kevin Poelcher"
						/>
						<Text css={authorCSS}>By Kevin Poelcher</Text>
					</Box>
					<LinkOverlay
						css={linkOverlayCSS}
						href="https://afsp.org/story/honoring-my-mother-by-working-toward-a-world-without-suicide"
						target="_blank"
						rel="noopener noreferrer"
					>
						Honoring My Mother by Working Toward a World Without
						Suicide
					</LinkOverlay>
				</LinkBox>
			</SimpleGrid>
		</Container>
	)
}

export default RealStories
