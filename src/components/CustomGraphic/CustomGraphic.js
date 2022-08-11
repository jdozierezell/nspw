import React from 'react'

import { Shareables } from './Shareables'
import { GraphicBuilder } from './GraphicBuilder'

export const CustomGraphic = ({ innerHeight }) => {
	return (
		<>
			<Shareables />
			<GraphicBuilder innerHeight={innerHeight} />
		</>
	)
}
