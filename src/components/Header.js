import React from 'react'
import { loadAnimation } from 'lottie-web'
import { defineLordIconElement } from 'lord-icon-element'

// import '../utils/forwardAndBackAnimation'

// register lottie and define custom element
defineLordIconElement(loadAnimation)

const Header = () => {
	return (
		<div>
			<lord-icon
				trigger="click"
				src="https://nspw.s3.amazonaws.com/icons/320-menu-7-morph-lineal-edited.json"
			></lord-icon>
		</div>
	)
}

export default Header
