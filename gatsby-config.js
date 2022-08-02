require('dotenv').config()

module.exports = {
	plugins: [
		`gatsby-plugin-emotion`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-react-helmet`,
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
