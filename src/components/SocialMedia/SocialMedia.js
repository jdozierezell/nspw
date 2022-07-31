import React, { useEffect } from 'react'
import { css } from '@emotion/react'

import SocialAccounts from './SocialAccounts'

import loadExternalScript from '../../utils/loadExternalScript'

const socialMediaCSS = css`
	#curator-feed-default-feed-layout {
		padding: 0;
	}
`

const SocialMedia = () => {
	return (
		<div css={socialMediaCSS}>
			<SocialAccounts />
			{loadExternalScript(
				'https://cdn.curator.io/published/5312a30d-4231-4175-b265-8b0360333cd8.js'
			)}
			<div id="curator-feed-default-feed-layout">
				<a
					href="https://curator.io"
					target="_blank"
					className="crt-logo crt-tag"
				>
					Powered by Curator.io
				</a>
			</div>
		</div>
	)
}

export default SocialMedia
