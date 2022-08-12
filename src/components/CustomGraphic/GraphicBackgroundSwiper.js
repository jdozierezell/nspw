import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import BackgroundClouds from '../../../static/svgs/customSVGs/BackgroundClouds.svg'
import BackgroundGreen from '../../../static/svgs/customSVGs/BackgroundGreen.svg'
import BackgroundRed from '../../../static/svgs/customSVGs/BackgroundRed.svg'
import BackgroundYellow from '../../../static/svgs/customSVGs/BackgroundYellow.svg'

export const GraphicBackgroundSwiper = ({ updateSVG }) => {
	const brandingCSS = css`
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	`
	return (
		<Swiper
			pagination={{
				clickable: true,
			}}
			navigation={true}
			modules={[Pagination, Navigation]}
			breakpoints={{
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				1080: {
					slidesPerView: 2,
					spaceBetween: 25,
				},
				1920: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			}}
		>
			<SwiperSlide>
				<BackgroundClouds
					id="BackgroundClouds"
					data-swiper="background"
					onClick={e =>
						updateSVG(
							e.target.closest('svg').dataset.swiper,
							e.target.closest('svg').id
						)
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<BackgroundGreen
					id="BackgroundGreen"
					data-swiper="background"
					onClick={e =>
						updateSVG(
							e.target.closest('svg').dataset.swiper,
							e.target.closest('svg').id
						)
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<BackgroundRed
					id="BackgroundRed"
					data-swiper="background"
					onClick={e =>
						updateSVG(
							e.target.closest('svg').dataset.swiper,
							e.target.closest('svg').id
						)
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<BackgroundYellow
					id="BackgroundYellow"
					data-swiper="background"
					onClick={e =>
						updateSVG(
							e.target.closest('svg').dataset.swiper,
							e.target.closest('svg').id
						)
					}
				/>
			</SwiperSlide>
		</Swiper>
	)
}
