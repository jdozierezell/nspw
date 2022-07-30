require('dotenv').config()

module.exports = {
	plugins: [
		`gatsby-plugin-emotion`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
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
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `icons`,
				path: `${__dirname}/static/icons/`,
			},
		},
	],
}
