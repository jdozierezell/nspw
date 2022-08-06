import React from 'react'
import { Script } from 'gatsby'
import { css } from '@emotion/react'
import { Box, Container, Heading } from '@chakra-ui/react'

import { SocialAccounts } from './SocialAccounts'

const socialMediaCSS = css`
	#curator-feed-default-feed-layout {
		padding: 0;
		margin: 0;
	}
`

export const SocialMedia = () => {
	return (
		<Container
			css={socialMediaCSS}
			maxW="100vw"
			p="4rem 0 0"
			m={0}
			id="follow-us"
		>
			<SocialAccounts p="2rem" />
			<Heading textAlign="center" m="4rem 1rem" color="purple.c700">
				#OutOfTheDarkness
			</Heading>
			<Box id="curator-feed-default-feed-layout" p={0} m={0}>
				<Script src="https://cdn.curator.io/published/5312a30d-4231-4175-b265-8b0360333cd8.js" />
			</Box>
		</Container>
	)
}
