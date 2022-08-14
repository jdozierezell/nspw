import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import IllustrationFaces from '../../../static/images/builderImages/IllustrationFaces.png'
import IllustrationHands from '../../../static/images/builderImages/IllustrationHands.png'
import IllustrationWalkers from '../../../static/images/builderImages/IllustrationWalkers.png'
import StarsFaces from '../../../static/images/builderImages/StarsFaces.png'
import StarsHands from '../../../static/images/builderImages/StarsHands.png'
import StarsWalkers from '../../../static/images/builderImages/StarsWalkers.png'

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
				<StarsWalkers css={brandingCSS} />
				<IllustrationWalkers
					css={brandingCSS}
					id="IllustrationWalkers"
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
				<StarsFaces css={brandingCSS} />
				<IllustrationFaces
					css={brandingCSS}
					id="IllustrationFaces"
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
				<StarsHands css={brandingCSS} />
				<IllustrationHands
					css={brandingCSS}
					id="IllustrationHands"
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
