import React from 'react'
import { css } from '@emotion/react'
import { Script } from 'gatsby'
import {
	Box,
	Grid,
	GridItem,
	Highlight,
	Link,
	Text,
	VStack,
} from '@chakra-ui/react'

import Logo from '../../../static/svgs/staticSVGs/logo.svg'

const crisisCSS = css`
	text-align: center;
	@media (min-width: 768px) {
		text-align: right;
	}
	a:hover {
		text-decoration: none;
	}
`

export const Footer = () => {
	return (
		<>
			<Grid
				bg="purple.c700"
				templateColumns={{
					sm: '1fr',
					md: 'minmax(auto, 12rem) 1fr minmax(auto, 20rem)',
				}}
				gap="4em"
				p="4rem 2rem"
				color="white"
			>
				<GridItem alignSelf="end">
					<Box maxW="12rem" m="auto">
						<Logo />
					</Box>
				</GridItem>
				<GridItem
					textAlign={{ sm: 'center', md: 'left' }}
					colStart={{ sm: 1, md: 3 }}
				>
					<VStack spacing="1rem">
						<Text w="100%" lineHeight="2rem" css={crisisCSS}>
							Are you in a crisis?
							<br />
							<Link href="tel:988">
								<Highlight
									key="1"
									query="Call or text 988"
									styles={{
										px: '2',
										py: '1',
										rounded: 'full',
										bg: 'purple.c100',
										textAlign: 'left',
										_hover: { bg: 'blue.c400' },
									}}
									w="100%"
								>
									Call or text 988 or
								</Highlight>
							</Link>{' '}
							<Link href="sms:741741&body=TALK">
								<Highlight
									key={2}
									query="text TALK to 741741"
									styles={{
										px: '2',
										py: '1',
										rounded: 'full',
										bg: 'purple.c100',
										textAlign: 'left',
										_hover: { bg: 'blue.c400' },
									}}
									w="100%"
								>
									text TALK to 741741
								</Highlight>
							</Link>
							.
						</Text>
						<Text w="100%" css={crisisCSS}>
							© 2022
							<br />
							American Foundation for Suicide Prevention
						</Text>
					</VStack>
				</GridItem>
			</Grid>
			<Script src="https://siteimproveanalytics.com/js/siteanalyze_6019066.js" />
		</>
	)
}
