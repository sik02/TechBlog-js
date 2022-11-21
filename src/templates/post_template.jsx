import React from 'react'
import { graphql } from 'gatsby'

import PostHead from '../components/Post/PostHead'
import PostContent from '../components/Post/PostContent'
import CommentWidget from '../components/Post/CommentWidget'

import Layout from '../components/Layout'



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
            thumbnail: {
              childImageSharp: {gatsbyImageData},
              publicURL,
            },
          },
        },
      } = edges[0]
  return (
    // <Template title={title} description={summary} url={href} image={publicURL}>
    <Layout>
      <PostHead
        title={title}
        date={date}
        categories={categories}
        thumbnail={gatsbyImageData}
      />
      <PostContent html={html} />
      <CommentWidget />
      </Layout>
    // </Template>
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
              publicURL
            }
          }
        }
      }
    }
  }
`