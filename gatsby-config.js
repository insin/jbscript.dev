module.exports = {
  siteMetadata: {
    title: 'jbscript.dev',
    author: 'Jonny Buchanan',
    description: 'Personal blog of Jonny Buchanan.',
    siteUrl: 'https://jbscript.dev',
    social: {
      twitter: '@jbscript',
    },
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-135424667-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'jbscript.dev',
        short_name: 'jbscript.dev',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#f0db4f',
        display: 'minimal-ui',
        icon: 'src/assets/icon-512.png',
        theme_color_in_head: false,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-catch-links',
  ],
}
