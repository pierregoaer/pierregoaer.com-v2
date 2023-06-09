module.exports = {
    siteMetadata: {
        siteUrl: `https://pierregoaer.com`,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images`,
            }
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: [`auto`, `webp`],
                    placeholder: `blurred`,
                }
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-image`,
        {
            resolve: "gatsby-plugin-anchor-links",
            options: {
                offset: -50
            }
        },
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                host: 'https://pierregoaer.com',
                sitemap: 'https://pierregoaer.com/sitemap-0.xml',
                policy: [{userAgent: '*', allow: '/'}]
            }
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    'G-LQB80DXPRL',
                ],
                pluginConfig: {
                    head: true,
                },
            },
        },
    ],
}
