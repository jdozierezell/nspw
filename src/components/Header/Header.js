import React, { useEffect, useRef, useState } from 'react'
import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
import { css } from '@emotion/react'

import MobileMenu from './MobileMenu'
import DeskMenu from './DeskMenu'

import Logo from '../../../static/svgs/logo.svg'

const Header = () => {
	const [isLargerThan1104] = useMediaQuery('(min-width: 1104px)')

	const [mobileMenuActive, setMobileMenuActive] = useState(false)
	const menuItems = [
		{
			label: 'Community Walks',
			anchor: '#community-walks',
		},
		{
			label: 'Graphic Builder',
			anchor: '#graphic-builder',
		},
		{
			label: 'Real Stories',
			anchor: '#real-stories',
		},
		{
			label: 'Event Calendar',
			anchor: '#event-calendar',
		},
		{
			label: 'Social Media',
			anchor: '#social-media',
		},
	]

	const headerCSS = css`
		position: relative;
		z-index: 1;
		margin: 0;
		@media (min-width: 1104px) {
			margin: 1.4em 4em 0.6em;
		}
	`

	return (
		<Flex
			justifyItems="center"
			alignItems="center"
			direction="row"
			css={headerCSS}
		>
			{isLargerThan1104 && (
				<Box minW="10em" maxW="12em">
					<Logo />
				</Box>
			)}
			{isLargerThan1104 ? (
				<DeskMenu menuItems={menuItems} />
			) : (
				<MobileMenu
					toggle={mobileMenuActive}
					setToggle={setMobileMenuActive}
					menuItems={menuItems}
				/>
			)}
		</Flex>
	)
}

export default Header
