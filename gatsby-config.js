module.exports = {
    plugins: [
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
    ],
}
