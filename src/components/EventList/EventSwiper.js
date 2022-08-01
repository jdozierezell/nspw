import React from 'react'
import { Container, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

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
				>
					{results.map((event, index) => (
						<SwiperSlide key={index}>
							<LinkBox>
								{event.date} {event.title}{' '}
							</LinkBox>
							<LinkOverlay
								href={`https://www.addevent.com/event/${event.eventCode}`}
								target="_blank"
								rel="noopener noreferrer"
							></LinkOverlay>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</Container>
	)
}

export default EventSwiper
