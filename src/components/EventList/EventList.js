import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { Container, Heading } from '@chakra-ui/react'

import { EventSwiper } from './EventSwiper'

dayjs.extend(utc)
dayjs.extend(timezone)

const containerCSS = css`
	font-family: hoss-round, sans-serif;
	font-weight: 600;
	font-style: normal;
	padding: 1rem 2rem 4rem;
	@media (min-width: 768px) {
		padding: 2rem 4rem 4rem;
	}
`

export const EventList = () => {
	const [addEvent, setAddEvent] = useState({
		title: 'AFSP national events',
		results: [],
	})
	// 2020-11-31 17:30:00
	const today = dayjs().format('YYYY-MM-DD')
	useEffect(() => {
		fetch(
			`https://www.addevent.com/api/v1/oe/events/list/?token=api1597763535vAb4iZ7xahkIFj5zRDWY95036&calendar_id=1659478767486686&upcoming=08/01/2022&upcoming=${today}`
		)
			.then(response => response.json())
			.then(result => {
				const events = result.events
				console.log(result)
				return events.map(event => {
					const startDate = dayjs
						.unix(event.date_start_unix)
						.tz('Etc/Greenwich')
						.format(
							event.all_day_event === 'true' ||
								event.date_end > event.date_start
								? 'MMMM D'
								: 'MMMM D @ h:mm a ET'
						)
					const endDate =
						event.date_end > event.date_start
							? dayjs(event.date_end, 'MM/DD/YYYY').format(
									'MMMM D'
							  )
							: ''
					return {
						__typename: 'Event',
						buttonText: 'Add to calendar',
						date:
							endDate !== ''
								? `${startDate} – ${endDate}`
								: startDate,
						endDate,
						eventCode: event.uniquekey,
						startDate,
						title: event.title,
						url: '',
					}
				})
			})
			.then(results =>
				setAddEvent(prevState => ({ ...prevState, results }))
			)
			.catch(error => console.log('error', error))
	}, [])
	return (
		<Container id="event-calendar" css={containerCSS} maxW={'100vw'}>
			<Heading m="2rem 0rem">Events Calendar</Heading>
			<EventSwiper events={addEvent} />
		</Container>
	)
}
