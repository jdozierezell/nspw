import React from 'react'
import { css } from '@emotion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { Image } from '@chakra-ui/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import illustrationFaces from '../../../static/images/builderImages/IllustrationFaces.png'
import illustrationHands from '../../../static/images/builderImages/IllustrationHands.png'
import illustrationWalkers from '../../../static/images/builderImages/IllustrationWalkers.png'
import starsFaces from '../../../static/images/builderImages/StarsFaces.png'
import starsHands from '../../../static/images/builderImages/StarsHands.png'
import starsWalkers from '../../../static/images/builderImages/StarsWalkers.png'

import { borders } from '../../theme/variables/borders'

export const GraphicIllustrationSwiper = ({ setImageDownload }) => {
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
				<Image src={illustrationWalkers} id="illustrationWalkers" />
				<Image
					src={starsWalkers}
					css={brandingCSS}
					onClick={e => {
						setImageDownload(prevState => ({
							...prevState,
							illustration: {
								src: e.target.previousSibling.src,
								id: e.target.previousSibling.id,
							},
							stars: { src: e.target.src, id: e.target.id },
						}))
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image src={illustrationFaces} id="illustrationFaces" />
				<Image
					src={starsFaces}
					css={brandingCSS}
					onClick={e => {
						setImageDownload(prevState => ({
							...prevState,
							illustration: {
								src: e.target.previousSibling.src,
								id: e.target.previousSibling.id,
							},
							stars: { src: e.target.src, id: e.target.id },
						}))
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image src={illustrationHands} id="illustrationHands" />
				<Image
					src={starsHands}
					css={brandingCSS}
					onClick={e => {
						setImageDownload(prevState => ({
							...prevState,
							illustration: {
								src: e.target.previousSibling.src,
								id: e.target.previousSibling.id,
							},
							stars: { src: e.target.src, id: e.target.id },
						}))
					}}
				/>
			</SwiperSlide>
		</Swiper>
	)
}
