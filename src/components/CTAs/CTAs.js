import React from 'react'
import { css } from '@emotion/react'
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	SimpleGrid,
	Text,
} from '@chakra-ui/react'

import Headphones from '../../../static/svgs/staticSVGs/noun-headphones-2474243-00449F.svg'
import Phone from '../../../static/svgs/staticSVGs/noun-phone-1212698-00449F.svg'

import { theme } from '../../theme/theme'

export const CTAs = () => {
	return (
		<Container variant="noPad" m="2rem 0">
			<SimpleGrid
				columns={{ base: 1, md: 2 }}
				gap="0"
				alignItems="stretch"
			>
				<Flex bg="#00449e" justifyContent="center" alignItems="end">
					<Flex
						gap={{ base: '1rem', md: '2rem' }}
						direction={{ base: 'column', md: 'row' }}
						alignItems="center"
						p={{ base: '4rem 3rem', md: '2rem 3rem' }}
					>
						<Box w={{ base: '60vw', md: '20vw' }}>
							<Phone
								style={css`
									width: 80%;
								`}
							/>
						</Box>
						<Box
							w={{
								base: 'calc(75vw - 4rem)',
								md: 'calc(25vw - 8rem)',
							}}
							maxW="623px"
							color="blue.c100"
						>
							<Heading>Together, Let's Support&nbsp;988</Heading>
							<Text py="1.5rem">
								Anyone, anywhere in the U.S. can call, chat, or
								text 988. Find out how AFSP supports new the
								Suicide &amp; Crisis Lifeline.
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
									Listen Now
								</a>
							</Button>
						</Box>
					</Flex>
				</Flex>
				<Flex bg="blue.c100" justifyContent="center" alignItems="end">
					<Flex
						gap={{ base: '1rem', md: '2rem' }}
						direction={{ base: 'column', md: 'row' }}
						alignItems="center"
						p={{ base: '4rem 4rem', md: '4rem 4rem 0' }}
					>
						<Box w={{ base: '60vw', md: '20vw' }}>
							<Headphones
								style={css`
									width: 100%;
								`}
							/>
						</Box>
						<Box
							w={{
								base: 'calc(75vw - 4rem)',
								md: 'calc(25vw - 8rem)',
							}}
							maxW="623px"
							color="#00449e"
						>
							<Heading>Together, Let's&nbsp;Listen</Heading>
							<Text py="1.5rem">
								AFSP partner Audacy invites you to listen to
								AFSP Out of the Darkness Radio. This is what
								Together sounds like.
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
				</Flex>
			</SimpleGrid>
		</Container>
	)
}
