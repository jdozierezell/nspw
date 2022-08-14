require('dotenv').config()

module.exports = {
	siteMetadata: {
		title: `National Suicide Prevention Week || AFSP`,
		description: `National Suicide Prevention Week is an opportunity to create awareness of this leading cause of death.`,
		author: `@jdozierezell`,
		image: `static/images/SuicidePreventionBeginsWithAllOfUs_TEXT.png`,
		siteUrl: `https://nspw.afsp.org`,
	},
	plugins: [
		`gatsby-plugin-emotion`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
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
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/static/images/`,
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'static/images/afsp-icon-512x512.png',
			},
		},
	],
}
