import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import StatementDiaMundialDeLaPrevencionDelSuicidio from '../../../static/images/builderImages/StatementDiaMundialDeLaPrevencionDelSuicidio.png'
import StatementLaPrevencionDelSuicidioComienzaConNosotros from '../../../static/images/builderImages/StatementLaPrevencionDelSuicidioComienzaConNosotros.png'
import StatementNationalSuicidePreventionWeek from '../../../static/images/builderImages/StatementNationalSuicidePreventionWeek.png'
import StatementOutOfTheDarkness from '../../../static/images/builderImages/StatementOutOfTheDarkness.png'
import StatementSemanaNacionalDePrevencionDelSuicidio from '../../../static/images/builderImages/StatementSemanaNacionalDePrevencionDelSuicidio.png'
import StatementSuicidePreventionBeginsWithAllOfUs from '../../../static/images/builderImages/StatementSuicidePreventionBeginsWithAllOfUs.png'
import StatementTogetherLetsWalk from '../../../static/images/builderImages/StatementTogetherLetsWalk.png'
import StatementWalkWithUs from '../../../static/images/builderImages/StatementWalkWithUs.png'
import StatementWorldSuicidePreventionDay from '../../../static/images/builderImages/StatementWorldSuicidePreventionDay.png'

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
				<StatementNationalSuicidePreventionWeek
					css={brandingCSS}
					id="StatementNationalSuicidePreventionWeek"
					data-swiper="statement"
					onClick={e => {
						const statementSVG = e.target.closest('svg')
						updateSVG(statementSVG.dataset.swiper, statementSVG.id)
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<StatementSuicidePreventionBeginsWithAllOfUs
					css={brandingCSS}
					id="StatementSuicidePreventionBeginsWithAllOfUs"
					data-swiper="statement"
					onClick={e => {
						const statementSVG = e.target.closest('svg')
						updateSVG(statementSVG.dataset.swiper, statementSVG.id)
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<StatementTogetherLetsWalk
					css={brandingCSS}
					id="StatementTogetherLetsWalk"
					data-swiper="statement"
					onClick={e => {
						const statementSVG = e.target.closest('svg')
						updateSVG(statementSVG.dataset.swiper, statementSVG.id)
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<StatementWalkWithUs
					css={brandingCSS}
					id="StatementWalkWithUs"
					data-swiper="statement"
					onClick={e => {
						const statementSVG = e.target.closest('svg')
						updateSVG(statementSVG.dataset.swiper, statementSVG.id)
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<StatementWorldSuicidePreventionDay
					css={brandingCSS}
					id="StatementWorldSuicidePreventionDay"
					data-swiper="statement"
					onClick={e => {
						const statementSVG = e.target.closest('svg')
						updateSVG(statementSVG.dataset.swiper, statementSVG.id)
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<StatementOutOfTheDarkness
					css={brandingCSS}
					id="StatementOutOfTheDarkness"
					data-swiper="statement"
					onClick={e => {
						const statementSVG = e.target.closest('svg')
						updateSVG(statementSVG.dataset.swiper, statementSVG.id)
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<StatementSemanaNacionalDePrevencionDelSuicidio
					css={brandingCSS}
					id="StatementSemanaNacionalDePrevencionDelSuicidio"
					data-swiper="statement"
					onClick={e => {
						const statementSVG = e.target.closest('svg')
						updateSVG(statementSVG.dataset.swiper, statementSVG.id)
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<StatementLaPrevencionDelSuicidioComienzaConNosotros
					css={brandingCSS}
					id="StatementLaPrevencionDelSuicidioComienzaConNosotros"
					data-swiper="statement"
					onClick={e => {
						const statementSVG = e.target.closest('svg')
						updateSVG(statementSVG.dataset.swiper, statementSVG.id)
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<StatementDiaMundialDeLaPrevencionDelSuicidio
					css={brandingCSS}
					id="StatementDiaMundialDeLaPrevencionDelSuicidio"
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
