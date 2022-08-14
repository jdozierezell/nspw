import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import illustrationFaces from '../../../static/images/builderImages/illustrationFaces.png'
import illustrationHands from '../../../static/images/builderImages/illustrationHands.png'
import illustrationWalkers from '../../../static/images/builderImages/illustrationWalkers.png'
import starsFaces from '../../../static/images/builderImages/starsFaces.png'
import starsHands from '../../../static/images/builderImages/starsHands.png'
import starsWalkers from '../../../static/images/builderImages/starsWalkers.png'

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
				{/*  */}
				<starsWalkers css={brandingCSS} />
				<illustrationWalkers
					css={brandingCSS}
					id="illustrationWalkers"
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
				<starsFaces css={brandingCSS} />
				<illustrationFaces
					css={brandingCSS}
					id="illustrationFaces"
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
				<starsHands css={brandingCSS} />
				<illustrationHands
					css={brandingCSS}
					id="illustrationHands"
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
