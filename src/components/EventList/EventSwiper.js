import React from 'react'
import { css } from '@emotion/react'
import { Container, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NSPWTheme } from '../../theme/NSPWTheme'

import 'swiper/css'

const swiperCSS = css`
	.swiper-slide {
		background: ${NSPWTheme.colors.white};
		color: ${NSPWTheme.colors.purple.c700};
	}
`
console.log(NSPWTheme)
const EventSwiper = ({ events }) => {
	const { title, results } = events
	console.log(results)
	return (
		<Container maxW="100vw">
			{results.length > 0 && (
				<Swiper
					spaceBetween={50}
					slidesPerView={3}
					onSlideChange={() => console.log('slide change')}
					onSwiper={swiper => console.log(swiper)}
					css={swiperCSS}
				>
					{results.map((event, index) => (
						<SwiperSlide key={index}>
							<LinkBox>
								{event.date} {event.title}{' '}
								<LinkOverlay
									href={`https://www.addevent.com/event/${event.eventCode}`}
									target="_blank"
									rel="noopener noreferrer"
								></LinkOverlay>
							</LinkBox>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</Container>
	)
}

export default EventSwiper
