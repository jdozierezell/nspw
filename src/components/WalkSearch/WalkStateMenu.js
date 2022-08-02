import React from 'react'
import { connectMenu } from 'react-instantsearch-dom'

import states from '../../utils/states.json'

const MenuSelect = ({ items, currentRefinement, refine }) => {
	console.log(currentRefinement)
	let currentRefinementLabel
	return (
		<select
			value={currentRefinement || ''}
			onChange={event => refine(event.currentTarget.value)}
		>
			<option value="">See all options</option>
			{items.map(item => {
				states.forEach(state => {
					if (item.isRefined && state.code === currentRefinement) {
						currentRefinementLabel = state.name
					} else if (state.code === item.value) {
						item.label = state.name
					}
				})
				return (
					<option
						key={item.label}
						value={item.isRefined ? currentRefinement : item.value}
					>
						{item.isRefined ? currentRefinementLabel : item.label}
					</option>
				)
			})}
		</select>
	)
}

const CustomMenuSelect = connectMenu(MenuSelect)

export default CustomMenuSelect

// import React from 'react'
// import { useMenu } from 'react-instantsearch-hooks-web'
// import { Select } from '@chakra-ui/react'

// import states from '../../utils/states.json'

// const CustomMenu = props => {
// 	const { items } = useMenu(props)

// 	const menu = items.map(item => {
// 		states.forEach(state => {
// 			if (state.code === item.value) {
// 				item.state = item.value
// 				item.label = state.name
// 			}
// 		})
// 		return item
// 	})

// 	return (
// 		<Select placeholder="Select option">
// 			{items.map(item => (
// 				<option value={item.state}>{item.label}</option>
// 			))}
// 		</Select>
// 	)
// }

// export default CustomMenu
