module.exports = {
  plugins: [
    {
      resolve: "@pehaa/gatsby-theme-wp-child",
      options: {
        wordPressUrl: "https://pehaa.xyz/gatsby-demo",
        fonts: {
          google: [
            {
              family: "Rubik",
              variants: ["400", "400i", "700"],
              fontDisplay: "swap",
            },
          ],
        },
      },
    },
  ],
}
