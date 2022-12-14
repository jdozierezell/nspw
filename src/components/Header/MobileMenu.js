import React from 'react'
import { css } from '@emotion/react'
import {
	Box,
	Collapse,
	Link,
	Spacer,
	useDisclosure,
	VStack,
} from '@chakra-ui/react'

import { MobileMenuButton } from './MobileMenuButton'

import { theme } from '../../theme/theme'

export const MobileMenu = ({ innerHeight, menuItems }) => {
	const { isOpen, onToggle } = useDisclosure()

	const mobileMenuCSS = css`
		width: 100vw;
		background-color: ${theme.colors.blue.c400};
		height: calc(${innerHeight}px - 5rem);
		font-family: hoss-round, sans-serif;
		font-weight: 600;
		font-style: normal;
	`

	return (
		<>
			<Box onClick={onToggle} bg="blue.c400" w="5rem" m="1rem auto 0">
				<MobileMenuButton isOpen={isOpen} />
			</Box>
			<Collapse in={isOpen}>
				<VStack
					css={mobileMenuCSS}
					justifyContent="space-around"
					p="4rem 0 1rem"
				>
					{menuItems.map((item, index) => {
						return (
							<React.Fragment key={index}>
								<Link fontSize="1.6rem" href={item.anchor}>
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
