import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { Image } from '@chakra-ui/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import illustrationFaces from '../../../static/images/builderImages/illustrationFaces.png'
import illustrationHands from '../../../static/images/builderImages/illustrationHands.png'
import illustrationWalkers from '../../../static/images/builderImages/illustrationWalkers.png'
import starsFaces from '../../../static/images/builderImages/starsFaces.png'
import starsHands from '../../../static/images/builderImages/starsHands.png'
import starsWalkers from '../../../static/images/builderImages/starsWalkers.png'

import { borders } from '../../theme/variables/borders'

export const GraphicIllustrationSwiper = ({ updateSVG }) => {
	const brandingCSS = css`
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		border: ${borders.purple1px};
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
				<Image src={starsWalkers} css={brandingCSS} />
				<Image
					src={illustrationWalkers}
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
				<Image src={starsFaces} css={brandingCSS} />
				<Image
					src={illustrationFaces}
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
				<Image src={starsHands} css={brandingCSS} />
				<Image
					src={illustrationHands}
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
