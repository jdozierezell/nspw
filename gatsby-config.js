require('dotenv').config()

module.exports = {
	plugins: [
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				typekit: {
					id: process.env.TYPEKIT_ID,
				},
			},
		},
		'gatsby-plugin-react-svg',
	],
}
