import { extendTheme } from '@chakra-ui/react'

import { breakpoints } from './variables/breakpoints'
import { colors } from './variables/colors'
import { fonts } from './variables/fonts'

import { styles } from './styles/styles'

import { Container } from './Components/Container'

export const theme = extendTheme({
	breakpoints,
	colors,
	fonts,
	styles,
	components: {
		Container,
	},
})
