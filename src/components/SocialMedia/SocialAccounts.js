import React from 'react'
import { css } from '@emotion/react'
import { Container, Flex } from '@chakra-ui/react'

import { theme } from '../../theme/theme'

import Facebook from '../../../static/svgs/socialPlatforms/facebook.svg'
import Instagram from '../../../static/svgs/socialPlatforms/instagram.svg'
import TikTok from '../../../static/svgs/socialPlatforms/tikTok.svg'
import Twitter from '../../../static/svgs/socialPlatforms/twitter.svg'
import LinkedIn from '../../../static/svgs/socialPlatforms/linkedIn.svg'
import YouTube from '../../../static/svgs/socialPlatforms/youTube.svg'
import TheMighty from '../../../static/svgs/socialPlatforms/theMighty.svg'

const socialAccountCSS = css`
	svg {
		height: 3.75rem;
		fill: ${theme.colors.purple.c700};
	}
`
const flexCSS = css`
	gap: 2rem;
	flex-wrap: wrap;
	@media (min-width: 768px) {
		gap: 3rem;
		flex-wrap: nowrap;
	}
`

export const SocialAccounts = () => {
	return (
		<Container css={socialAccountCSS} maxW="auto" m="1rem auto 2rem">
			<Flex
				css={flexCSS}
				justify="center"
				gap={{ sm: '2rem', md: '3rem' }}
				wrap={{ sm: 'wrap', md: 'nowrap' }}
			>
				<a
					href="https://www.facebook.com/AFSPnational/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="AFSPNational Facebook"
				>
					<Facebook />
				</a>
				<a
					href="https://www.instagram.com/afspnational/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="AFSPNational Instagram"
				>
					<Instagram />
				</a>
				<a
					href="https://twitter.com/afspnational"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="AFSPNational Twitter"
				>
					<Twitter />
				</a>
				<a
					href="https://www.tiktok.com/@afspnational"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="AFSPNational TikTok"
				>
					<TikTok />
				</a>
				<a
					href="https://www.linkedin.com/company/afspnational"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="AFSPNational LinkedIn"
				>
					<LinkedIn />
				</a>
				<a
					href="https://www.youtube.com/user/afspnational"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="AFSPNational YouTube"
				>
					<YouTube />
				</a>
				<a
					href="https://themighty.com/u/americanfoundationforsuicideprevention/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="AFSP partner page on themighty.com"
				>
					<TheMighty />
				</a>
			</Flex>
		</Container>
	)
}
