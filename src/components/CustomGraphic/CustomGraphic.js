import React from 'react'

import { Shareables } from './Shareables'
import { GraphicBuilder } from './GraphicBuilder'

export const CustomGraphic = ({ downloadSVG }) => {
	return (
		<>
			<Shareables />
			<GraphicBuilder downloadSVG={downloadSVG} />
		</>
	)
}
