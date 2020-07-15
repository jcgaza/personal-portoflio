module.exports = {
  siteMetadata: {
    title: "Personal Portfolio",
    author: "John Cedric Gaza",
    description: "Personal portfolio showcasing projects and work experience.",
    keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, SEO, Starter`,
    github: `https://github.com/jcgaza`,
    linkedin: `https://www.linkedin.com/in/john-cedric-gaza-b09466157/`,
    email: `jccgaza@gmail.com`,
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Portfolio",
        short_name: "Portfolio",
        start_url: "/",
        background_color: "#ec9f05",
        theme_color: "#ec9f05",
        display: "standalone",
        icon: "src/images/avatar.png",
        orientation: "portrait",
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
