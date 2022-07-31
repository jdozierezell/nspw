import React from 'react'
import { css } from '@emotion/react'
import { Container, Flex } from '@chakra-ui/react'

import Facebook from '../../../static/svgs/facebook.svg'
import Instagram from '../../../static/svgs/instagram.svg'
import TikTok from '../../../static/svgs/tikTok.svg'
import Twitter from '../../../static/svgs/twitter.svg'
import LinkedIn from '../../../static/svgs/linkedIn.svg'
import YouTube from '../../../static/svgs/youTube.svg'
import TheMighty from '../../../static/svgs/theMighty.svg'

const socialAccountCSS = css`
	svg {
		width: 3em;
	}
`

const SocialAccounts = () => {
	return (
		<Container css={socialAccountCSS}>
			<Flex gap={4}>
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

export default SocialAccounts
