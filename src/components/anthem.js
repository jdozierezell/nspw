import React from 'react'
import { Container, VStack } from '@chakra-ui/react'

const Anthem = () => {
	return (
		<Container
			fontSize="1.4em"
			maxW="100vw"
			bg="purple.700"
			color="white"
			p={{ sm: '2rem', md: '0 4rem 4rem' }}
		>
			<VStack
				gap="1.4em"
				align="flex-start"
				maxW={'48em'}
				m="0 auto"
				fontSize="1rem"
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
				<p>Together, let’s walk.</p>
			</VStack>
		</Container>
	)
}

export default Anthem
