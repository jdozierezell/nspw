import React from 'react'
import { css } from '@emotion/react'
import { Container, Heading, Text, VStack } from '@chakra-ui/react'

export const AboutNSPW = () => {
	const aboutCSS = css`
		font-weight: 500;
		font-style: normal;
		color: #ffffff;
		font-size: 1.2rem;
		padding: 2rem 2rem;
		@media (min-width: 768px) {
			padding: 4rem 4rem;
		}
	`

	return (
		<Container id="about-nspw" css={aboutCSS} bg="purple.c700">
			<VStack gap="1.4em" align="flex-start" maxW={'48em'} m="3rem auto">
				<Heading as="h2" m="0 0 1rem">
					About National Suicide Prevention Week
				</Heading>
				<Text>
					The American Foundation for Suicide Prevention (AFSP)
					recognizes the month of September as National Suicide
					Prevention Month: a moment in time in which we rally the
					public to create awareness of this leading cause of death,
					and inspire more and more people to learn how they can play
					a role in their communities in helping to save lives.
					Alternatively recognized as National Suicide Prevention Week
					(generally the week after Labor Day) and World Suicide
					Prevention Day (September 10), AFSP takes advantage of the
					full month to offer understanding and guidance for the
					public through special events, personal stories and
					perspectives, shareable social graphics and other materials
					designed to help people know what they can do if they or
					someone they know is struggling, and how to have authentic,
					caring conversations about suicide and mental health.
				</Text>
				<Text>
					Suicide prevention is important every day of the year.
					National Suicide Prevention Month gives us an opportunity to
					shine a special, encouraging light on this topic that
					affects us all, and send a clear, hopeful message that help
					is available, and suicide can be prevented.
				</Text>
			</VStack>
		</Container>
	)
}
