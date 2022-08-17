import React from 'react'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	GridItem,
	Heading,
	Text,
} from '@chakra-ui/react'

import { theme } from '../../theme/theme'

export const CTAs = () => {
	return (
		<Container variant="noPad" m="2rem 0">
			<Grid
				gap="0"
				templateColumns={{
					base: '1fr',
					md: '1fr 1fr',
					lg: '34vw 66vw',
					xl: 'repeat(4, 1fr)',
				}}
				alignItems="stretch"
			>
				<GridItem
					colSpan={1}
					colStart={1}
					rowSpan={1}
					rowStart={1}
					bg="#00449e"
					justifyContent="start"
					alignItems={{ base: 'start', lg: 'center' }}
					direction={{ base: 'column', lg: 'row' }}
				>
					<StaticImage
						src="../../../static/images/988.jpg"
						alt="Person holding a phone displaying 988"
					/>
				</GridItem>
				<Flex
					colSpan={1}
					colStart={{ base: 1, lg: 2 }}
					rowSpan={1}
					rowStart={{ base: 2, lg: 1 }}
					bg="#00449e"
					color="blue.c100"
					p={{ base: '2rem 2rem 4rem', xl: '0 2rem' }}
					alignItems="center"
				>
					<Box>
						<Heading>Together, Let's Support&nbsp;988</Heading>
						<Text p="1rem 0 2rem">
							Anyone, anywhere in the U.S. can call, chat, or text
							988. Find out how AFSP supports new the Suicide
							&amp; Crisis Lifeline.
						</Text>
						<Button
							border={`1px solid ${theme.colors.blue.c100}`}
							bg="transparent"
							borderRadius={'5px'}
							_hover={{ bg: 'blue.c100', color: '#00449e' }}
						>
							<a
								href="https://afsp.org/988-suicide-and-crisis-lifeline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Learn More
							</a>
						</Button>
					</Box>
				</Flex>
				<GridItem
					colSpan={1}
					colStart={{ base: 1, md: 2, lg: 1, xl: 3 }}
					rowSpan={1}
					rowStart={{ base: 3, md: 1, lg: 2, xl: 1 }}
					bg="blue.c100"
					justifyContent="start"
					alignItems={{ base: 'start', lg: 'center' }}
					direction={{ base: 'column', lg: 'row' }}
				>
					<StaticImage
						src="../../../static/images/Audacy.png"
						alt="Audacy Out of the Darkness station"
					/>
				</GridItem>
				<Flex
					colSpan={1}
					colStart={{ base: 1, md: 2, xl: 4 }}
					rowSpan={1}
					rowStart={{ base: 4, md: 2, xl: 1 }}
					bg="blue.c100"
					color="#00449e"
					p={{ base: '2rem 2rem 4rem', xl: '0 2rem' }}
					alignItems="center"
				>
					<Box>
						<Heading>Together, Let's&nbsp;Listen</Heading>
						<Text p="1rem 0 2rem">
							AFSP partner Audacy invites you to listen to AFSP
							Out of the Darkness Radio. This is what Together
							sounds like.{' '}
							<em>New station coming September 1.</em>
						</Text>
						<Button
							border="1px solid #00449e"
							bg="transparent"
							borderRadius={'5px'}
							_hover={{ bg: '#00449e', color: 'blue.c100' }}
						>
							<a
								href="https://www.audacy.com/afspoutofthedarknessradio/listen#discover"
								target="_blank"
								rel="noopener noreferrer"
							>
								Listen Now
							</a>
						</Button>
					</Box>
				</Flex>
			</Grid>
		</Container>
	)
}
