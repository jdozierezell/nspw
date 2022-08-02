import React, { useEffect, useState } from 'react'
import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
import { css } from '@emotion/react'

import MobileMenu from './MobileMenu'
import DeskMenu from './DeskMenu'

const Header = ({ innerHeight }) => {
	const [isLargerThan1104] = useMediaQuery('(min-width: 1104px)')

	const menuItems = [
		{
			label: 'Community Walks',
			anchor: '#community-walks',
		},
		{
			label: 'Shareables',
			anchor: '#graphic',
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
			label: 'Follow Us',
			anchor: '#follow-us',
		},
	]

	return (
		<>
			{isLargerThan1104 ? (
				<DeskMenu menuItems={menuItems} />
			) : (
				<MobileMenu innerHeight={innerHeight} menuItems={menuItems} />
			)}
		</>
	)
}

export default Header
