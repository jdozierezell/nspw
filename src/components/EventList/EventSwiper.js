import React from 'react'
import { css } from '@emotion/react'
import { Container, Heading, Link, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { NSPWTheme } from '../../theme/NSPWTheme'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const swiperCSS = css`
	.swiper-slide {
		background: ${NSPWTheme.colors.white};
		color: ${NSPWTheme.colors.purple.c700};
		min-height: 20rem;
		padding-bottom: 2rem;
	}
`
const linkCSS = css`
	position: absolute;
	bottom: 2rem;
`

console.log(NSPWTheme)
const EventSwiper = ({ events }) => {
	const { title, results } = events
	console.log(results)
	return (
		<Container maxW="100vw" p={0}>
			{results.length > 0 && (
				<Swiper
					onSlideChange={() => console.log('slide change')}
					onSwiper={swiper => console.log(swiper)}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					css={swiperCSS}
					breakpoints={{
						320: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
				>
					{results.map((event, index) => (
						<SwiperSlide key={index}>
							<Text m="2rem 3rem">{event.date}</Text>
							<Heading m="2rem 3rem">{event.title}</Heading>
							<Link
								css={linkCSS}
								href={`https://www.addevent.com/event/${event.eventCode}`}
								m="2rem 3rem"
								target="_blank"
								rel="noopener noreferrer"
							>
								Mark your calendar
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</Container>
	)
}

export default EventSwiper
