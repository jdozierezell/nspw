import React from 'react'
import { css } from '@emotion/react'
import { Box } from '@chakra-ui/react'

import MobileMenuButton from './MobileMenuButton'

const MobileMenu = ({ toggle, setToggle }) => {
	const menuButtonCSS = css`
		position: relative;
		left: 50%;
		transform: translate(-50%, 0);
	`

	return (
		<Box w="20" css={menuButtonCSS}>
			<MobileMenuButton toggle={toggle} setToggle={setToggle} />
		</Box>
	)
}

export default MobileMenu
