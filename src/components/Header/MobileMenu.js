import React from 'react'
import { css } from '@emotion/react'
import { Box } from '@chakra-ui/react'

import MobileMenuButton from './MobileMenuButton'

const MobileMenu = ({ toggle, setToggle }) => {
	const menuButtonCSS = css`
		position: absolute;
		left: 50%;
		transform: translate(-50%, 0);
	`

	return (
		<Box w="20" m="1em auto" css={menuButtonCSS}>
			<MobileMenuButton toggle={toggle} setToggle={setToggle} />
		</Box>
	)
}

export default MobileMenu
