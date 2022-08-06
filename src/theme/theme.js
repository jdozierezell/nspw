import { extendTheme } from '@chakra-ui/react'

import { breakpoints } from './variables/breakpoints'
import { colors } from './variables/colors'
import { fonts } from './variables/fonts'

import { styles } from './styles/styles'

import { Box, LinkBox } from './Components/Box'
import { Container } from './Components/Container'
import { Link } from './Components/Link'
import { Select } from './Components/Select'
import { Text } from './Components/Text'

export const theme = extendTheme({
	breakpoints,
	colors,
	fonts,
	styles,
	components: {
		Box,
		Container,
		Link,
		LinkBox,
		Select,
		Text,
	},
})
