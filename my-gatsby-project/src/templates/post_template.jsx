import React from 'react'
import { graphql } from 'gatsby'
import Template from '../components/Common/Template'
import PostHead from '../components/Post/PostHead'
import PostContent from '../components/Post/PostContent'
import CommentWidget from '../components/Post/CommentWidget'



const Post_template = ({
    data: {
        allMarkdownRemark: {edges},
    },
    location: {href},
}) => {
    const {
        node: {
          html,
          frontmatter: {
            title,
            summary,
            date,
            categories,
          },
        },
      } = edges[0]
  return (
    <Template title={title} description={summary} url={href}>
      <PostHead
        title={title}
        date={date}
        categories={categories}
      />
      <PostContent html={html} />
      <CommentWidget />
    </Template>
  )
}

export default Post_template

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`