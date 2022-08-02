import React, { useEffect } from 'react'
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

const MobileMenu = ({ toggle, setToggle, menuItems }) => {
	const { isOpen, onToggle } = useDisclosure()
	// useEffect(() => {
	// 	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	// 	let vh = window.innerHeight * 0.01
	// 	// Then we set the value in the --vh custom property to the root of the document
	// 	document.documentElement.style.setProperty('--vh', `${vh}px`)
	// 	// We listen to the resize event
	// 	window.addEventListener('resize', () => {
	// 		// We execute the same script as before
	// 		let vh = window.innerHeight * 0.01
	// 		document.documentElement.style.setProperty('--vh', `${vh}px`)
	// 	})
	// })

	const menuClosedCSS = css`
		width: 100vw;
		height: 100vh;
		background-color: ${NSPWTheme.colors.blue.c400};
		height: calc(var(--vh, 1vh) * 100);
	`
	// transition-duration: 0.5s;
	// 	transition-property: bottom;
	// 	transition-timing-function: ease-in;

	return (
		<>
			<Box onClick={onToggle} bg="blue.c400" w="20" m="0 auto">
				<MobileMenuButton toggle={toggle} setToggle={setToggle} />
			</Box>
			<Collapse in={isOpen}>
				<VStack
					// css={menuClosedCSS}
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
