import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { Image } from '@chakra-ui/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import backgroundClouds from '../../../static/images/builderImages/BackgroundClouds.png'
import backgroundGreen from '../../../static/images/builderImages/BackgroundGreen.png'
import backgroundRed from '../../../static/images/builderImages/BackgroundRed.png'
import backgroundYellow from '../../../static/images/builderImages/BackgroundYellow.png'

export const GraphicBackgroundSwiper = ({ setImageDownload }) => {
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
				992: {
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
				<Image
					src={backgroundClouds}
					id="backgroundClouds"
					onClick={e =>
						setImageDownload(prevState => ({
							...prevState,
							background: { src: e.target.src, id: e.target.id },
						}))
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={backgroundGreen}
					id="backgroundGreen"
					onClick={e =>
						setImageDownload(prevState => ({
							...prevState,
							background: { src: e.target.src, id: e.target.id },
						}))
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={backgroundRed}
					id="backgroundRed"
					onClick={e =>
						setImageDownload(prevState => ({
							...prevState,
							background: { src: e.target.src, id: e.target.id },
						}))
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={backgroundYellow}
					id="backgroundYellow"
					onClick={e =>
						setImageDownload(prevState => ({
							...prevState,
							background: { src: e.target.src, id: e.target.id },
						}))
					}
				/>
			</SwiperSlide>
		</Swiper>
	)
}
