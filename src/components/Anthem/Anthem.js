import React from 'react'
import { css } from '@emotion/react'
import { Container, VStack } from '@chakra-ui/react'

const Anthem = () => {
	const anthemCSS = css`
		font-family: quasimoda, sans-serif;
		font-weight: 500;
		font-style: normal;
		color: #ffffff;
		font-size: 1.2rem;
		padding: 1rem 2rem 2rem;
		@media (min-width: 768px) {
			padding: 0 4rem 4rem;
		}
		h3 {
			font-family: hoss-round, sans-serif;
			font-weight: 600;
			font-style: normal;
			font-size: 2em;
		}
	`

	return (
		<Container css={anthemCSS} maxW="100vw" bg="purple.c700">
			<VStack
				gap="1.4em"
				align="flex-start"
				maxW={'48em'}
				m="0 auto 3rem"
			>
				<p>
					Just imagine if we could walk together toward a world
					without suicide. Since 2002, the American Foundation for
					Suicide Prevention’s Out of the Darkness Walks have brought
					friends, neighbors, family members and colleagues together
					to walk through their communities to raise public awareness
					and funds to support suicide prevention, including education
					programs in local schools and workplaces; support for those
					who’ve lost loved ones; advocacy for critical mental health
					and suicide prevention legislation; and scientific research
					that helps us learn more how we can save more lives.
				</p>
				<p>
					September is National Suicide Prevention Month, and we want
					you to join us as we make strides in saving lives, and
					bringing hope, one step at a time, to those affected by
					suicide.
				</p>
				<h3>Together, let’s walk.</h3>
			</VStack>
		</Container>
	)
}

export default Anthem
