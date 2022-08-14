import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { Image } from '@chakra-ui/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import statementDiaMundialDeLaPrevencionDelSuicidio from '../../../static/images/builderImages/statementDiaMundialDeLaPrevencionDelSuicidio.png'
import statementLaPrevencionDelSuicidioComienzaConNosotros from '../../../static/images/builderImages/statementLaPrevencionDelSuicidioComienzaConNosotros.png'
import statementNationalSuicidePreventionWeek from '../../../static/images/builderImages/statementNationalSuicidePreventionWeek.png'
import statementOutOfTheDarkness from '../../../static/images/builderImages/statementOutOfTheDarkness.png'
import statementSemanaNacionalDePrevencionDelSuicidio from '../../../static/images/builderImages/statementSemanaNacionalDePrevencionDelSuicidio.png'
import statementSuicidePreventionBeginsWithAllOfUs from '../../../static/images/builderImages/statementSuicidePreventionBeginsWithAllOfUs.png'
import statementTogetherLetsWalk from '../../../static/images/builderImages/statementTogetherLetsWalk.png'
import statementWalkWithUs from '../../../static/images/builderImages/statementWalkWithUs.png'
import statementWorldSuicidePreventionDay from '../../../static/images/builderImages/statementWorldSuicidePreventionDay.png'

import { borders } from '../../theme/variables/borders'

export const GraphicStatementSwiper = ({ setImageDownload }) => {
	const brandingCSS = css`
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
				<Image
					src={statementNationalSuicidePreventionWeek}
					css={brandingCSS}
					id="statementNationalSuicidePreventionWeek"
					onClick={e =>
						setImageDownload(prevState => ({
							...prevState,
							statement: {
								src: e.target.src,
								faces: { x: 54, y: 225, scale: 0.9 },
								hands: { x: 54, y: 475, scale: 0.9 },
								walkers: { x: 54, y: 0, scale: 0.9 },
							},
						}))
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={statementSuicidePreventionBeginsWithAllOfUs}
					css={brandingCSS}
					id="statementSuicidePreventionBeginsWithAllOfUs"
					onClick={e =>
						setImageDownload(prevState => ({
							...prevState,
							statement: {
								src: e.target.src,
								faces: { x: 270, y: 240, scale: 0.48 },
								hands: { x: 270, y: 518, scale: 0.48 },
								walkers: { x: 270, y: 0, scale: 0.48 },
							},
						}))
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={statementTogetherLetsWalk}
					css={brandingCSS}
					id="statementTogetherLetsWalk"
					onClick={e =>
						setImageDownload(prevState => ({
							...prevState,
							statement: {
								src: e.target.src,
								faces: { x: 108, y: 265, scale: 0.8 },
								hands: { x: 108, y: 510, scale: 0.8 },
								walkers: { x: 108, y: 0, scale: 0.8 },
							},
						}))
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={statementWalkWithUs}
					css={brandingCSS}
					id="statementWalkWithUs"
					onClick={e =>
						setImageDownload(prevState => ({
							...prevState,
							statement: {
								src: e.target.src,
								faces: { x: 0, y: 0, scale: 1 },
								hands: { x: 0, y: 0, scale: 1 },
								walkers: { x: 0, y: 0, scale: 1 },
							},
						}))
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={statementWorldSuicidePreventionDay}
					css={brandingCSS}
					id="statementWorldSuicidePreventionDay"
					onClick={e =>
						setImageDownload(prevState => ({
							...prevState,
							statement: {
								src: e.target.src,
								faces: { x: 0, y: 0, scale: 1 },
								hands: { x: 0, y: 0, scale: 1 },
								walkers: { x: 0, y: 0, scale: 1 },
							},
						}))
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={statementOutOfTheDarkness}
					css={brandingCSS}
					id="statementOutOfTheDarkness"
					onClick={e =>
						setImageDownload(prevState => ({
							...prevState,
							statement: {
								src: e.target.src,
								faces: { x: 0, y: 0, scale: 1 },
								hands: { x: 0, y: 0, scale: 1 },
								walkers: { x: 0, y: 0, scale: 1 },
							},
						}))
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={statementSemanaNacionalDePrevencionDelSuicidio}
					css={brandingCSS}
					id="statementSemanaNacionalDePrevencionDelSuicidio"
					onClick={e =>
						setImageDownload(prevState => ({
							...prevState,
							statement: {
								src: e.target.src,
								faces: { x: 0, y: 0, scale: 1 },
								hands: { x: 0, y: 0, scale: 1 },
								walkers: { x: 0, y: 0, scale: 1 },
							},
						}))
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={statementLaPrevencionDelSuicidioComienzaConNosotros}
					css={brandingCSS}
					id="statementLaPrevencionDelSuicidioComienzaConNosotros"
					onClick={e =>
						setImageDownload(prevState => ({
							...prevState,
							statement: {
								src: e.target.src,
								faces: { x: 0, y: 0, scale: 1 },
								hands: { x: 0, y: 0, scale: 1 },
								walkers: { x: 0, y: 0, scale: 1 },
							},
						}))
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={statementDiaMundialDeLaPrevencionDelSuicidio}
					css={brandingCSS}
					id="statementDiaMundialDeLaPrevencionDelSuicidio"
					onClick={e =>
						setImageDownload(prevState => ({
							...prevState,
							statement: {
								src: e.target.src,
								faces: { x: 0, y: 0, scale: 1 },
								hands: { x: 0, y: 0, scale: 1 },
								walkers: { x: 0, y: 0, scale: 1 },
							},
						}))
					}
				/>
			</SwiperSlide>
		</Swiper>
	)
}
