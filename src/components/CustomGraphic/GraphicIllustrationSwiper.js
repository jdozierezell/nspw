import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import BackgroundBlueFill from '../../../static/svgs/customSVGs/BackgroundBlueFill.svg'
import IllustrationFacesSquare from '../../../static/svgs/customSVGs/IllustrationFacesSquare.svg'
import IllustrationHandsSquare from '../../../static/svgs/customSVGs/IllustrationHandsSquare.svg'
import IllustrationWalkersSquare from '../../../static/svgs/customSVGs/IllustrationWalkersSquare.svg'
import IllustrationFacesSquareStars from '../../../static/svgs/customSVGs/IllustrationFacesSquareStars.svg'
import IllustrationHandsSquareStars from '../../../static/svgs/customSVGs/IllustrationHandsSquareStars.svg'
import IllustrationWalkersSquareStars from '../../../static/svgs/customSVGs/IllustrationWalkersSquareStars.svg'

export const GraphicIllustrationSwiper = ({ updateSVG }) => {
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
				{/* <BackgroundBlueFill /> */}
				<IllustrationWalkersSquareStars css={brandingCSS} />
				<IllustrationWalkersSquare
					css={brandingCSS}
					id="IllustrationWalkersSquare"
					data-swiper="illustration"
					onClick={e =>
						updateSVG(
							e.target.closest('svg').dataset.swiper,
							e.target.closest('svg').id
						)
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<BackgroundBlueFill />
				<IllustrationFacesSquareStars css={brandingCSS} />
				<IllustrationFacesSquare
					css={brandingCSS}
					id="IllustrationFacesSquare"
					data-swiper="illustration"
					onClick={e =>
						updateSVG(
							e.target.closest('svg').dataset.swiper,
							e.target.closest('svg').id
						)
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<BackgroundBlueFill />
				<IllustrationHandsSquareStars css={brandingCSS} />
				<IllustrationHandsSquare
					css={brandingCSS}
					id="IllustrationHandsSquare"
					data-swiper="illustration"
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
