import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import EventSwiper from './EventSwiper'

dayjs.extend(utc)
dayjs.extend(timezone)

const EventList = () => {
	const [addEvent, setAddEvent] = useState({
		title: 'AFSP national events',
		results: [],
	})

	useEffect(() => {
		fetch(
			'https://www.addevent.com/api/v1/oe/events/list/?token=api1597763535vAb4iZ7xahkIFj5zRDWY95036&calendar_id=1597763535284712&upcoming=08/01/2022'
		)
			.then(response => response.json())
			.then(result => {
				const events = result.events
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
	return <EventSwiper events={addEvent} />
}

export default EventList
