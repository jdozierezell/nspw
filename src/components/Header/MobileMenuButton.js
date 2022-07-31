import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react'
import { Box, Button } from '@chakra-ui/react'

import svg from '../../../static/icons/320-menu-7-morph-lineal-edited.json'

const MobileMenuButton = ({ toggle, setToggle }) => {
	const lottieRef = useRef()
	const [menuOpen, setMenuOpen] = useState(false)

	const mobileButtonAnim = e => {
		const el = e.current
		if (toggle) {
			el.setDirection(-1)
			el.play()
		} else {
			el.setDirection(1)
			el.play()
		}

		setToggle(!toggle)
	}

	// useEffect(e => {
	// 	console.log(e)
	// 	const el = lottieRef.current
	// 	el.setDirection(-1)
	// })

	return (
		<Box as="button">
			<Lottie
				autoplay={false}
				loop={false}
				lottieRef={lottieRef}
				animationData={svg}
				onClick={() => mobileButtonAnim(lottieRef)}
			></Lottie>
		</Box>
	)
}

export default MobileMenuButton
