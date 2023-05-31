const path = require(`path`);

module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: path.join(__dirname, `src`, `assets`),
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
    ],
}
