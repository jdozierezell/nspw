import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import BackgroundTransparent from '../../../static/svgs/customSVGs/BackgroundTransparent.svg'
import IllustrationFacesSquare from '../../../static/svgs/customSVGs/IllustrationFacesSquare.svg'
import IllustrationHandsSquare from '../../../static/svgs/customSVGs/IllustrationHandsSquare.svg'
import IllustrationWalkersSquare from '../../../static/svgs/customSVGs/IllustrationWalkersSquare.svg'

export const GraphicIllustrationSwiper = () => {
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
				<BackgroundTransparent />
				<IllustrationWalkersSquare css={brandingCSS} />
			</SwiperSlide>
			<SwiperSlide>
				<BackgroundTransparent />
				<IllustrationFacesSquare css={brandingCSS} />
			</SwiperSlide>
			<SwiperSlide>
				<BackgroundTransparent />
				<IllustrationHandsSquare css={brandingCSS} />
			</SwiperSlide>
		</Swiper>
	)
}
