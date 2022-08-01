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

const Menu = () => {
	const menuItems = [
		{
			label: 'Community Walks',
			anchor: '#community-walks',
		},
		{
			label: 'Graphic Builder',
			anchor: '#graphic-builder',
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
			label: 'Social Media',
			anchor: '#social-media',
		},
	]

	return (
		<Container maxW="1080px" css={menuCSS}>
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
