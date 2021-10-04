import theme from "@pehaa/gatsby-theme-wp-child/src/@chakra-ui/gatsby-plugin/theme"
import { transparentize } from "@chakra-ui/theme-tools"
import { extendTheme } from "@chakra-ui/react"
const extendedTheme = {
  fonts: {
    body: "Rubik, sans-serif",
    heading: "Rubik, sans-serif",
  },
  colors: {
    brand: theme.colors.purple,
  },
  shadows: {
    lg: `0 5px 15px -5px ${transparentize(
      "purple.500",
      0.25
    )(theme)},0 4px 6px -2px ${transparentize("purple.500", 0.05)(theme)}`,
  },
  styles: {
    global: {
      body: {
        ".site-header nav": {
          textTransform: "uppercase",
        },
      },
    },
  },
}

export default extendTheme(extendedTheme, theme)
