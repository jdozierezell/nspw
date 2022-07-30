import React from 'react'
import { Box, Grid, GridItem, Link, Text, VStack } from '@chakra-ui/react'
import { css } from '@emotion/react'

import Logo from '../../static/svgs/logo.svg'

const footerCSS = css`
	background
`

const Footer = () => {
	return (
		<Grid
			bg="purple.700"
			templateColumns={{
				sm: '1fr',
				md: 'minmax(auto, 12em) 1fr minmax(auto, 24em)',
			}}
			gap="4em"
			p="4em"
			color="white"
		>
			<GridItem alignSelf="end">
				<Box maxW="12em" m="auto">
					<Logo />
				</Box>
			</GridItem>
			<GridItem
				textAlign={{ sm: 'center', md: 'left' }}
				colStart={{ sm: 1, md: 3 }}
			>
				<VStack spacing="1em">
					<Text w="100%">
						Are you in a crisis?
						<br />
						<Link href="tel:988">Call 988</Link> or{' '}
						<Link href="sms:741741&body=TALK">
							text TALK to 741741
						</Link>
						.
					</Text>
					<Text w="100%">
						© 2022
						<br />
						American Foundation for Suicide Prevention
					</Text>
				</VStack>
			</GridItem>
		</Grid>
	)
}

export default Footer
