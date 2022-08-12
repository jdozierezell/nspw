import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import BackgroundTransparent from '../../../static/svgs/customSVGs/BackgroundTransparent.svg'
import StatementDiaMundailDeLaPrevencionDelSuicidio from '../../../static/svgs/customSVGs/StatementDiaMundailDeLaPrevencionDelSuicidio.svg'
import StatementLaPrevencionDelSuicidioComienzaConNosotros from '../../../static/svgs/customSVGs/StatementLaPrevencionDelSuicidioComienzaConNosotros.svg'
import StatementNationalSuicidePreventionWeek from '../../../static/svgs/customSVGs/StatementNationalSuicidePreventionWeek.svg'
import StatementOutOfTheDarkness from '../../../static/svgs/customSVGs/StatementOutOfTheDarkness.svg'
import StatementSemanaNacionalDePrevencionDelSuicidio from '../../../static/svgs/customSVGs/StatementSemanaNacionalDePrevencionDelSuicidio.svg'
import StatementSuicidePreventionBeginsWithAllOfUs from '../../../static/svgs/customSVGs/StatementSuicidePreventionBeginsWithAllOfUs.svg'
import StatementTogetherLetsTalk from '../../../static/svgs/customSVGs/StatementTogetherLetsTalk.svg'
import StatementWalkWithUs from '../../../static/svgs/customSVGs/StatementWalkWithUs.svg'
import StatementWorldSuicidePreventionDay from '../../../static/svgs/customSVGs/StatementWorldSuicidePreventionDay.svg'

export const GraphicStatementSwiper = ({ updateSVG }) => {
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
				<StatementNationalSuicidePreventionWeek
					css={brandingCSS}
					id="StatementNationalSuicidePreventionWeek"
					data-swiper="statement"
					onClick={e =>
						updateSVG(
							e.target.closest('svg').dataset.swiper,
							e.target.closest('svg').id
						)
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<BackgroundTransparent />
				<StatementSuicidePreventionBeginsWithAllOfUs
					css={brandingCSS}
					id="StatementSuicidePreventionBeginsWithAllOfUs"
					data-swiper="statement"
					onClick={e =>
						updateSVG(
							e.target.closest('svg').dataset.swiper,
							e.target.closest('svg').id
						)
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<BackgroundTransparent />
				<StatementTogetherLetsTalk
					css={brandingCSS}
					id="StatementTogetherLetsTalk"
					data-swiper="statement"
					onClick={e =>
						updateSVG(
							e.target.closest('svg').dataset.swiper,
							e.target.closest('svg').id
						)
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<BackgroundTransparent />
				<StatementWalkWithUs
					css={brandingCSS}
					id="StatementWalkWithUs"
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
				<BackgroundTransparent />
				<StatementWorldSuicidePreventionDay
					css={brandingCSS}
					id="StatementWorldSuicidePreventionDay"
					data-swiper="statement"
					onClick={e =>
						updateSVG(
							e.target.closest('svg').dataset.swiper,
							e.target.closest('svg').id
						)
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<BackgroundTransparent />
				<StatementOutOfTheDarkness
					css={brandingCSS}
					id="StatementOutOfTheDarkness"
					data-swiper="statement"
					onClick={e =>
						updateSVG(
							e.target.closest('svg').dataset.swiper,
							e.target.closest('svg').id
						)
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<BackgroundTransparent />
				<StatementSemanaNacionalDePrevencionDelSuicidio
					css={brandingCSS}
					id="StatementSemanaNacionalDePrevencionDelSuicidio"
					data-swiper="statement"
					onClick={e =>
						updateSVG(
							e.target.closest('svg').dataset.swiper,
							e.target.closest('svg').id
						)
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<BackgroundTransparent />
				<StatementLaPrevencionDelSuicidioComienzaConNosotros
					css={brandingCSS}
					id="StatementLaPrevencionDelSuicidioComienzaConNosotros"
					data-swiper="statement"
					onClick={e =>
						updateSVG(
							e.target.closest('svg').dataset.swiper,
							e.target.closest('svg').id
						)
					}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<BackgroundTransparent />
				<StatementDiaMundailDeLaPrevencionDelSuicidio
					css={brandingCSS}
					id="StatementDiaMundailDeLaPrevencionDelSuicidio"
					data-swiper="statement"
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
