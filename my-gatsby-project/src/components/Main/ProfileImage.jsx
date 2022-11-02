import React from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'


const ProfileImageWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage = ({profileImage}) => {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default ProfileImage

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail
          }
        }
      }
    }
    file(name: {eq: "profile-image"}) {
        childImageSharp {
          gatsbyImageData(width: 120, height: 120)
        }
      }
  }
`