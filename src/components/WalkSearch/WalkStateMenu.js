import React from 'react'
import { connectMenu } from 'react-instantsearch-dom'
import { Select, Text } from '@chakra-ui/react'

import states from '../../utils/states.json'

const StateMenu = ({ items, currentRefinement, refine, setHasQuery }) => {
	let currentRefinementLabel
	return (
		<Select
			variant="flushed"
			value={currentRefinement || ''}
			onChange={event => {
				setHasQuery(true)
				refine(event.currentTarget.value)
			}}
			fontWeight="500"
			color="purple.c700"
			fontSize="1.2rem"
		>
			<option value="">Select your state</option>
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
		</Select>
	)
}

const WalkStateMenu = connectMenu(StateMenu)

export default WalkStateMenu
