import { breakpoints } from '../variables/breakpoints'

export const Container = {
	baseStyle: {
		maxW: '100vw',
		m: 0,
		p: { base: '1rem 2rem', md: '2rem 4rem' },
	},
	variants: {
		noPad: {
			p: 0,
		},
	},
}
