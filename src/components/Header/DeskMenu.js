import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Container, Flex, Spacer } from '@chakra-ui/react'
import { css } from '@emotion/react'

import Logo from '../../../static/svgs/logo.svg'

const menuCSS = css`
	margin-top: 2rem;
	padding: 0 4rem;
	button {
		background: transparent;
		color: #42347f;
		font-family: hoss-round, sans-serif;
		font-weight: 600;
		font-style: normal;
		&:hover {
			color: #ffffff;
			background: #42347f;
		}
	}
`

const Menu = ({ menuItems }) => {
	return (
		<Container css={menuCSS}>
			<Flex
				direction="row"
				justifyContent="end"
				gap={{ md: '2em', xl: '4em' }}
				wrap="nowrap"
			>
				<Box minW="10em" maxW="12em">
					<Logo />
				</Box>
				<Spacer />
				{menuItems.map((item, index) => (
					<Button key={index} fontSize={{ md: '1em', lg: '1.2em' }}>
						<a href={item.anchor}>{item.label}</a>
					</Button>
				))}
			</Flex>
		</Container>
	)
}

export default Menu
