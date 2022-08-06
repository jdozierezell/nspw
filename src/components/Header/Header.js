import React from 'react'
import { useMediaQuery } from '@chakra-ui/react'

import { MobileMenu } from './MobileMenu'
import { DeskMenu } from './DeskMenu'

export const Header = ({ innerHeight }) => {
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
			label: 'Events Calendar',
			anchor: '#event-calendar',
		},
		{
			label: 'About NSPW',
			anchor: '#about-nspw',
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
