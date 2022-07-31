import { extendTheme } from '@chakra-ui/react'
// import { customAlertVariant } from "./Alert/customAlert"

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

const colors = {
	blue: {
		50: '#dcf8ff',
		100: '#b1e4ff',
		200: '#83d0fb',
		300: '#54bdf8',
		400: '#2aaaf5',
		500: '#1591db',
		600: '#0771ab',
		700: '#00507b',
		800: '#00304c',
		900: '#00111e',
	},
	purple: {
		50: '#f0ecff',
		100: '#cfc9ed',
		200: '#afa4db',
		300: '#8f80cb',
		400: '#6f5cbc',
		500: '#5542a2',
		600: '#42347f',
		700: '#2f255c',
		800: '#1c1639',
		900: '#0a0618',
	},
	teal: {
		50: '#ecf5f9',
		100: '#ccdfe8',
		200: '#aacad9',
		300: '#87b6cb',
		400: '#67a1bd',
		500: '#4f88a3',
		600: '#3f6a7f',
		700: '#2e4c5a',
		800: '#1b2d36',
		900: '#060f13',
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
				bg: 'blue.400',
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

// export const NSPWTheme = extendTheme({
//   components: {
//     // This is a custom variant for Toast
//     // It has to be here because Toast is rendered in a portal
//     Alert: {
//       variants: {
//         subtle: customAlertVariant,
//         "left-accent": customAlertVariant,
//         "top-accent": customAlertVariant,
//         solid: customAlertVariant,
//         custom: {
//           container: {
//             border: "1px solid",
//             borderColor: "orange.500",
//             bg: "orange.800",
//             color: "orange.200",
//           },
//           icon: {
//             color: "orange.200",
//           },
//         },
//       },
//     },
//   },
// })
