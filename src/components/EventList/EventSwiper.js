import React from 'react'
import { css } from '@emotion/react'
import { Container, Link, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { theme } from '../../theme/theme'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const swiperCSS = css`
	.swiper-slide {
		background: ${theme.colors.white};
		color: ${theme.colors.purple.c700};
		min-height: 20rem;
		padding-bottom: 2rem;
	}
`
const dateCSS = css`
	font-weight: 500;
	font-style: normal;
`
const titleCSS = css`
	font-family: hoss-round, sans-serif;
	font-weight: 600;
	font-style: normal;
	font-size: 2rem;
	margin: 2rem 3rem;
	@media (min-width: 768) {
		font-size: 3rem;
	}
`
const linkCSS = css`
	position: absolute;
	bottom: 2rem;
	font-family: quasimoda, sans-serif;
	font-weight: 500;
	font-style: normal;
`

export const EventSwiper = ({ events: { results } }) => {
	return (
		<Container p={0}>
			{results.length > 0 && (
				<Swiper
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
						1080: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
				>
					{results.map((event, index) => (
						<SwiperSlide key={index}>
							<Text css={dateCSS} m="2rem 3rem">
								{event.date}
							</Text>
							<h3 css={titleCSS}>{event.title}</h3>
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
