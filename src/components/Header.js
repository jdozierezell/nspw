import React, { useEffect, useRef, useState } from 'react'
import { Box } from '@chakra-ui/react'
import lottie from 'lottie-web'
import { defineLordIconElement } from 'lord-icon-element'

// import '../utils/forwardAndBackAnimation'

// register lottie and define custom element
defineLordIconElement(lottie.loadAnimation)

const Header = () => {
	const mobileMenuButton = useRef()
	const [mobileMenuActive, setMobileMenuActive] = useState(false)

	return (
		<Box>
			<lord-icon
				ref={mobileMenuButton}
				id="mobile-menu-button"
				trigger="click"
				src="https://nspw.s3.amazonaws.com/icons/320-menu-7-morph-lineal-edited.json"
			></lord-icon>
		</Box>
	)
}

export default Header
