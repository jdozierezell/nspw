import { extendTheme } from '@chakra-ui/react'

const brand = {
	border: '#2D8540',
	focusColor: '#4BDF6B',
}

const breakpoints = {
	sm: '30rem',
	md: '48rem',
	menuToggle: '65em',
	lg: '80rem',
	xl: '90rem',
	'2xl': '96rem',
}

// added 'c' in front of color numbers so they can be used as regular key values
const colors = {
	blue: {
		c50: '#dcf8ff',
		c100: '#b1e4ff',
		c200: '#83d0fb',
		c300: '#54bdf8',
		c400: '#2aaaf5',
		c500: '#1591db',
		c600: '#0771ab',
		c700: '#00507b',
		c800: '#00304c',
		c900: '#00111e',
	},
	purple: {
		c50: '#f0ecff',
		c100: '#cfc9ed',
		c200: '#afa4db',
		c300: '#8f80cb',
		c400: '#6f5cbc',
		c500: '#5542a2',
		c600: '#42347f',
		c700: '#2f255c',
		c800: '#1c1639',
		c900: '#0a0618',
	},
	teal: {
		c50: '#ecf5f9',
		c100: '#ccdfe8',
		c200: '#aacad9',
		c300: '#87b6cb',
		c400: '#67a1bd',
		c500: '#4f88a3',
		c600: '#3f6a7f',
		c700: '#2e4c5a',
		c800: '#1b2d36',
		c900: '#060f13',
	},
	white: '#ffffff',
}

const fonts = {
	body: 'Quasimoda',
	heading: 'Hoss Round',
}

const fontSizes = {
	xs: '0.75rem',
	sm: '0.875rem',
	md: '1rem',
	lg: '1.125rem',
	xl: '1.25rem',
	'2xl': '1.5rem',
	'3xl': '1.875rem',
	'4xl': '2.25rem',
	'5xl': '3rem',
	'6xl': '3.75rem',
	'7xl': '4.5rem',
	'8xl': '6rem',
	'9xl': '8rem',
}

const styles = {
	global: props => {
		return {
			body: {
				bg: 'blue.c400',
			},
			_selection: {
				bg: 'purple.400',
				color: 'white',
			},
		}
	},
}

const textStyles = {
	paragraph: {
		m: '5em',
	},
}

export const NSPWTheme = extendTheme({
	brand,
	breakpoints,
	colors,
	fonts,
	fontSizes,
	styles,
	textStyles,
})
