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

export const GraphicStatementSwiper = ({ updateSVG }) => {
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
					data-swiper="statement"
					onClick={e => {
						const statementSVG = e.target.closest('svg')
						updateSVG(statementSVG.dataset.swiper, statementSVG.id)
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={statementSuicidePreventionBeginsWithAllOfUs}
					css={brandingCSS}
					id="statementSuicidePreventionBeginsWithAllOfUs"
					data-swiper="statement"
					onClick={e => {
						const statementSVG = e.target.closest('svg')
						updateSVG(statementSVG.dataset.swiper, statementSVG.id)
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={statementTogetherLetsWalk}
					css={brandingCSS}
					id="statementTogetherLetsWalk"
					data-swiper="statement"
					onClick={e => {
						const statementSVG = e.target.closest('svg')
						updateSVG(statementSVG.dataset.swiper, statementSVG.id)
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={statementWalkWithUs}
					css={brandingCSS}
					id="statementWalkWithUs"
					data-swiper="statement"
					onClick={e => {
						const statementSVG = e.target.closest('svg')
						updateSVG(statementSVG.dataset.swiper, statementSVG.id)
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={statementWorldSuicidePreventionDay}
					css={brandingCSS}
					id="statementWorldSuicidePreventionDay"
					data-swiper="statement"
					onClick={e => {
						const statementSVG = e.target.closest('svg')
						updateSVG(statementSVG.dataset.swiper, statementSVG.id)
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={statementOutOfTheDarkness}
					css={brandingCSS}
					id="statementOutOfTheDarkness"
					data-swiper="statement"
					onClick={e => {
						const statementSVG = e.target.closest('svg')
						updateSVG(statementSVG.dataset.swiper, statementSVG.id)
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={statementSemanaNacionalDePrevencionDelSuicidio}
					css={brandingCSS}
					id="statementSemanaNacionalDePrevencionDelSuicidio"
					data-swiper="statement"
					onClick={e => {
						const statementSVG = e.target.closest('svg')
						updateSVG(statementSVG.dataset.swiper, statementSVG.id)
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={statementLaPrevencionDelSuicidioComienzaConNosotros}
					css={brandingCSS}
					id="statementLaPrevencionDelSuicidioComienzaConNosotros"
					data-swiper="statement"
					onClick={e => {
						const statementSVG = e.target.closest('svg')
						updateSVG(statementSVG.dataset.swiper, statementSVG.id)
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src={statementDiaMundialDeLaPrevencionDelSuicidio}
					css={brandingCSS}
					id="statementDiaMundialDeLaPrevencionDelSuicidio"
					data-swiper="statement"
					onClick={e => {
						const statementSVG = e.target.closest('svg')
						updateSVG(statementSVG.dataset.swiper, statementSVG.id)
					}}
				/>
			</SwiperSlide>
		</Swiper>
	)
}
