import React from 'react'
import { css } from '@emotion/react'
import { Box, Container, Link, Spacer, VStack } from '@chakra-ui/react'

import MobileMenuButton from './MobileMenuButton'

const MobileMenu = ({ toggle, setToggle, menuItems }) => {
	const menuClosedCSS = css`
		position: absolute;
		bottom: -124px;
		transition-duration: 0.5s;
		transition-property: bottom;
		transition-timing-function: ease-in;
	`
	const menuOpenCSS = css`
		position: absolute;
		bottom: -100vh;
		transition-duration: 0.5s;
		transition-property: bottom;
		transition-timing-function: ease-in;
	`

	return (
		<Container bg="blue.c400" css={toggle ? menuOpenCSS : menuClosedCSS}>
			<VStack h="100vh" justifyContent="space-around" p="4rem 0 1rem">
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
				<Box bg="blue.c400" w="20">
					<MobileMenuButton toggle={toggle} setToggle={setToggle} />
				</Box>
			</VStack>
		</Container>
	)
}

export default MobileMenu
