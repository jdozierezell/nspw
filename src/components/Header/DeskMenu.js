import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'

const menuCSS = css`
	button {
		background: transparent;
		color: #42347f;
		&:hover {
			color: #ffffff;
			background: #42347f;
		}
	}
`

const Menu = ({ menuItems }) => {
	return (
		<Container maxW="100vw" css={menuCSS}>
			<Flex
				direction="row"
				justifyContent="end"
				gap={{ md: '2em', xl: '4em' }}
				wrap="nowrap"
			>
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
