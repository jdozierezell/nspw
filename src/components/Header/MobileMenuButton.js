import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react'
import { Box, Button } from '@chakra-ui/react'

import svg from '../../../static/icons/320-menu-7-morph-lineal-edited.json'

const MobileMenuButton = ({ isOpen }) => {
	const lottieRef = useRef()

	useEffect(() => {
		if (!isOpen) {
			lottieRef.current.setDirection(-1)
			lottieRef.current.play()
		} else {
			lottieRef.current.setDirection(1)
			lottieRef.current.play()
		}
	})

	return (
		<Lottie
			autoplay={false}
			loop={false}
			lottieRef={lottieRef}
			animationData={svg}
		></Lottie>
	)
}

export default MobileMenuButton
