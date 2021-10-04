import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box } from "@chakra-ui/react"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      wp {
        generalSettings {
          title
        }
      }
    }
  `)
  return (
    <Box
      as="footer"
      p="6"
      fontSize="sm"
      bg="purple.800"
      color="white"
      mt="auto"
      textAlign="center"
    >
      <b>{data.wp.generalSettings.title}</b> - Built with WordPress and GatsbyJS
    </Box>
  )
}

export default Footer
