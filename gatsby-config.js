module.exports = {
  siteMetadata: {
    title: 'Ryan Bott Test Site',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/img`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
}
