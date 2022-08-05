import React from 'react'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
const SEO = ({ title, description, pathname, children }) => {
	const {
		title: defaultTitle,
		description: defaultDescription,
		image,
		siteUrl,
		twitterUsername,
	} = useSiteMetadata()
	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}/${image}`,
		url: `${siteUrl}${pathname || ``}`,
		twitterUsername,
	}
	return (
		<>
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />
			<meta property="og:title" content={seo.title} />
			<meta property="og:type" content="website" />
			<meta property="og:image" content={seo.image} />
			<meta property="og:url" content={seo.url} />
			<meta property="og:description" content={seo.description} />
			<meta property="og:site_name" content={seo.title} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={seo.title} />
			<meta name="twitter:url" content={seo.url} />
			<meta name="twitter:description" content={seo.description} />
			<meta name="twitter:image" content={seo.image} />
			<meta name="twitter:creator" content={seo.twitterUsername} />
			<meta
				name="twitter:image:alt"
				content="National Suicide Prevention Week is September 4–10"
			/>
			<meta name="twitter:site" content="@afspnational" />
			<link
				rel="stylesheet"
				href="https://use.typekit.net/ogc8vre.css"
			></link>
			<script type="application/ld+json">
				{`
					{
					"@context": "https://schema.org",
					"@type": "Event",
					"name": "National Suicide Prevention Week",
					"startDate": "2022-09-04T00:00Z",
					"endDate": "2022-09-10T23:59Z",
					"eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
					"eventStatus": "https://schema.org/EventScheduled",
					"location": {
						"@type": "VirtualLocation",
						"url": "https://nspw.afsp.org/"
					},

					"image": "https://nspw.afsp.org/images/NationalSuicidePreventionWeek_Purple-01.png",
					"description": "National Suicide Prevention Week is an opportunity to create awareness of this leading cause of death.",
					"organizer": {
						"@type": "Organization",
						"name": "American Foundation for Suicide Prevention",
						"url": "https://afsp.org"
					}
					}
				`}
			</script>
		</>
	)
}

export default SEO
