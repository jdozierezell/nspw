require('dotenv').config()

module.exports = {
	plugins: [
		`gatsby-plugin-emotion`,
		{
			resolve: `gatsby-plugin-web-font-loader`,
			options: {
				typekit: {
					id: process.env.TYPEKIT_ID,
				},
			},
		},
		{
			resolve: `gatsby-plugin-react-svg`,
			options: {
				rule: {
					include: /static\/svgs/,
				},
			},
		},
	],
}
