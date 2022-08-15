import React from 'react'
import { css } from '@emotion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { Image } from '@chakra-ui/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import statementDiaMundialDeLaPrevencionDelSuicidio from '../../../static/images/builderImages/StatementDiaMundialDeLaPrevencionDelSuicidio.png'
import statementLaPrevencionDelSuicidioComienzaConNosotros from '../../../static/images/builderImages/StatementLaPrevencionDelSuicidioComienzaConNosotros.png'
import statementNationalSuicidePreventionWeek from '../../../static/images/builderImages/StatementNationalSuicidePreventionWeek.png'
import statementOutOfTheDarkness from '../../../static/images/builderImages/StatementOutOfTheDarkness.png'
import statementSemanaNacionalDePrevencionDelSuicidio from '../../../static/images/builderImages/StatementSemanaNacionalDePrevencionDelSuicidio.png'
import statementSuicidePreventionBeginsWithAllOfUs from '../../../static/images/builderImages/StatementSuicidePreventionBeginsWithAllOfUs.png'
import statementTogetherLetsWalk from '../../../static/images/builderImages/StatementTogetherLetsWalk.png'
import statementWalkWithUs from '../../../static/images/builderImages/StatementWalkWithUs.png'
import statementWorldSuicidePreventionDay from '../../../static/images/builderImages/StatementWorldSuicidePreventionDay.png'

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
								default: { x: 0, y: 225, scale: 1 },
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
								default: { x: 0, y: 0, scale: 1 },
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
								default: { x: 0, y: 225, scale: 1 },
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
								default: { x: 0, y: 380, scale: 1 },
								faces: { x: 0, y: 302, scale: 1 },
								hands: { x: 0, y: 540, scale: 1 },
								walkers: { x: 0, y: 22, scale: 1 },
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
								default: { x: 0, y: 300, scale: 1 },
								faces: { x: 0, y: 260, scale: 1 },
								hands: { x: 0, y: 510, scale: 1 },
								walkers: { x: 0, y: 22, scale: 1 },
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
								default: { x: 0, y: 210, scale: 1 },
								faces: { x: 130, y: 245, scale: 0.76 },
								hands: { x: 130, y: 480, scale: 0.76 },
								walkers: { x: 151, y: 0, scale: 0.72 },
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
								default: { x: 0, y: 300, scale: 1 },
								faces: { x: 0, y: 290, scale: 1 },
								hands: { x: 0, y: 540, scale: 1 },
								walkers: { x: 0, y: 22, scale: 1 },
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
								default: { x: 0, y: 225, scale: 1 },
								faces: { x: 162, y: 260, scale: 0.7 },
								hands: { x: 119, y: 480, scale: 0.78 },
								walkers: { x: 108, y: 0, scale: 0.8 },
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
								default: { x: 0, y: 280, scale: 1 },
								faces: { x: 0, y: 260, scale: 1 },
								hands: { x: 0, y: 510, scale: 1 },
								walkers: { x: 0, y: 16, scale: 1 },
							},
						}))
					}
				/>
			</SwiperSlide>
		</Swiper>
	)
}
