import React, { useEffect } from 'react'
import { css } from '@emotion/react'
import { Container, Heading } from '@chakra-ui/react'

import SocialAccounts from './SocialAccounts'

import loadExternalScript from '../../utils/loadExternalScript'

const socialMediaCSS = css`
	padding: 0 2rem;
	@media (min-width: 768px) {
		padding: 4rem 0rem 0rem;
	}
	#curator-feed-default-feed-layout {
		padding: 0;
	}
`

const SocialMedia = () => {
	return (
		<Container css={socialMediaCSS} maxW="100vw" p="0">
			<SocialAccounts />
			{loadExternalScript(
				'https://cdn.curator.io/published/5312a30d-4231-4175-b265-8b0360333cd8.js'
			)}
			<Heading textAlign="center" p="2rem 0" color="purple.c700">
				#OutOfTheDarkness
			</Heading>
			<div id="curator-feed-default-feed-layout">
				<a
					href="https://curator.io"
					target="_blank"
					className="crt-logo crt-tag"
				>
					Powered by Curator.io
				</a>
			</div>
		</Container>
	)
}

export default SocialMedia
