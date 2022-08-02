import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import {
	Box,
	Button,
	Collapse,
	Link,
	Lorem,
	Spacer,
	useDisclosure,
	VStack,
} from '@chakra-ui/react'

import MobileMenuButton from './MobileMenuButton'

import { NSPWTheme } from '../../theme/NSPWTheme'

const MobileMenu = ({ innerHeight, menuItems }) => {
	const { isOpen, onToggle } = useDisclosure()

	const menuClosedCSS = css`
		width: 100vw;
		background-color: ${NSPWTheme.colors.blue.c400};
		height: calc(${innerHeight}px - 5rem);
	`

	return (
		<>
			<Box onClick={onToggle} bg="blue.c400" w="5rem" m="1rem auto 0">
				<MobileMenuButton isOpen={isOpen} />
			</Box>
			<Collapse in={isOpen}>
				<VStack
					css={menuClosedCSS}
					justifyContent="space-around"
					p="4rem 0 1rem"
				>
					{menuItems.map((item, index) => {
						return (
							<React.Fragment key={index}>
								<Link
									fontSize="1.6rem"
									fontFamily="Hoss Round"
									fontWeight="600"
									href={item.anchor}
								>
									{item.label}
								</Link>
								<Spacer />
								{index + 1 < menuItems.length && (
									<Spacer borderTop="1px solid black" />
								)}
							</React.Fragment>
						)
					})}
				</VStack>
			</Collapse>
		</>
	)
}

export default MobileMenu
