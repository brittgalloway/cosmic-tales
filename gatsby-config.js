module.exports = {
  siteMetadata: {
    title: `The Solar System | Learn About Our Planets`,
    siteUrl: `https://brittgalloway.github.io/cosmic-tales/`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/logo.png"
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};