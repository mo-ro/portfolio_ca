module.exports = {
  pathPrefix: "/portfolio_ca",
  siteMetadata: {
    title: 'Kotaro | Portfolio',
    name: "Kotaro's portfolio / Front-End Developer",
    description: "Hi! I'm Kotaro Front-end developer. If you are free now, check this out!",
    url: 'https://morotee.com',
    image: 'https://github.com/mo-ro/portfolio_ca/blob/master/src/images/ogp.png?raw=true',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: './src/images/favi.png',
      },
    },
    'gatsby-plugin-offline',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `webWorks`,
        path: `./src/works/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-102222732-6"
      }
    }
  ],
}
