import React, { useEffect, useRef, useState } from 'react'
import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
import { css } from '@emotion/react'

import MobileMenu from './MobileMenu'
import DeskMenu from './DeskMenu'

import Logo from '../../../static/svgs/logo.svg'
import SuicidePreventionBeginsWithAllOfUs from '../../../static/svgs/suicidePreventionBeginsWithAllOfUs.svg'

const Header = () => {
	const [isLargerThan1104] = useMediaQuery('(min-width: 1104px)')

	const [mobileMenuActive, setMobileMenuActive] = useState(false)

	useEffect(() => {
		if (mobileMenuActive) {
			console.log('active')
		} else {
			console.log('not active')
		}
	}, [mobileMenuActive])

	return (
		<Flex
			justifyItems="center"
			alignItems="center"
			direction="row"
			m="1.4em 4em 0.6em"
			css={css`
				position: relative;
				z-index: 1;
			`}
		>
			{isLargerThan1104 && (
				<Box minW="10em" maxW="12em">
					<Logo />
				</Box>
			)}
			{isLargerThan1104 ? (
				<DeskMenu />
			) : (
				<MobileMenu
					toggle={mobileMenuActive}
					setToggle={setMobileMenuActive}
				/>
			)}
		</Flex>
	)
}

export default Header
