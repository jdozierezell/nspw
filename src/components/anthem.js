import React from 'react'
import { css } from '@emotion/react'
import { Container, VStack } from '@chakra-ui/react'

const anthemCSS = css`
	margin: 4em 2em;
	@media (min-width: 768px) {
		margin: 4em;
	}
	p {
		font-size: 1.2em;
		margin: 1.4em 0;
	}
`

const Anthem = () => {
	return (
		<Container fontSize="1.2em" maxW="48em">
			<VStack gap="1em" align="flex-start">
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
				<p>Together, let’s walk.</p>
			</VStack>
		</Container>
	)
}

export default Anthem
