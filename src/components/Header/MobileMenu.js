import React from 'react'
import { css } from '@emotion/react'
import { Box, Container, Link, Spacer, VStack } from '@chakra-ui/react'

import MobileMenuButton from './MobileMenuButton'

const MobileMenu = ({ toggle, setToggle, menuItems }) => {
	const menuButtonCSS = css``
	console.log(menuItems)
	return (
		<Container bg="blue.c400">
			<VStack h="100vh" justifyContent="space-around" p="4rem 0 1rem">
				{menuItems.map((item, index) => {
					return (
						<>
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
						</>
					)
				})}
				<Box bg="blue.c400" w="20" css={menuButtonCSS}>
					<MobileMenuButton toggle={toggle} setToggle={setToggle} />
				</Box>
			</VStack>
		</Container>
	)
}

export default MobileMenu
