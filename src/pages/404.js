import React from 'react'
import {
	ChakraProvider,
	Container,
	Flex,
	Heading,
	Highlight,
	Link,
} from '@chakra-ui/react'

import { theme } from '../theme/theme'

export const FourOhFour = () => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Container bg="blue.c400">
				<Flex justifyContent="center" alignItems="center">
					<div></div>
					<Heading as="h1" color="purple.c700" p="50vh">
						Page not found. Please visit{' '}
						<Link href="https://nspw.afsp.org">
							<Highlight
								query="nspw.afsp.org"
								styles={{
									p: '1rem',
									borderRadius: '1rem',
									bg: 'purple.c100',
									_hover: {
										bg: 'purple.c700',
										color: 'white',
									},
								}}
							>
								nspw.afsp.org
							</Highlight>
						</Link>
					</Heading>
					<div></div>
				</Flex>
			</Container>
		</ChakraProvider>
	)
}
