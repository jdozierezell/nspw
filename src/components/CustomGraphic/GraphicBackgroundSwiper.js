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
import LogoNSPWBlackURL from '../../../static/svgs/customSVGs/LogoNSPWBlackURL.svg'
import LogoNSPWWhiteURL from '../../../static/svgs/customSVGs/LogoNSPWWhiteURL.svg'

export const GraphicBackgroundSwiper = () => {
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
				<BackgroundClouds />
				<LogoNSPWWhiteURL css={brandingCSS} />
			</SwiperSlide>
			<SwiperSlide>
				<BackgroundGreen />
				<LogoNSPWWhiteURL css={brandingCSS} />
			</SwiperSlide>
			<SwiperSlide>
				<BackgroundRed />
				<LogoNSPWWhiteURL css={brandingCSS} />
			</SwiperSlide>
			<SwiperSlide>
				<BackgroundYellow />
				<LogoNSPWBlackURL css={brandingCSS} />
			</SwiperSlide>
		</Swiper>
	)
}
