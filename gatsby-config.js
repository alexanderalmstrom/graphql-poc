require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'GraphQL POC',
    description: 'Demo with GraphQL fragments, TravisCI and Gatsby intl plugin.',
  },
  plugins: [
    'gatsby-plugin-stylelint',
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: ['en', 'sv'],
        // language file path
        defaultLanguage: 'en',
        // option to redirect to `/en` when connecting `/`
        redirect: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gratsby-poc',
        short_name: 'gatsby-poc',
        start_url: '/',
        background_color: '#FFFDF9',
        theme_color: '#151515',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        environment: process.env.CONTENTFUL_ENV || 'master',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: 'cdn.contentful.com',
      },
    },
  ],
};
