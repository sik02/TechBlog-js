import * as React from "react"
import { graphql } from "gatsby"


const NotFoundPage = ({ data}) => {

  return (
    <div>Test</div>
  )
}


export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

