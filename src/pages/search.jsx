import React, { useMemo } from "react";

import Template from "../components/Common/Template";
import PostList from "../components/Main/PostList";
import CategoryList from "../components/Main/CategoryList";
import { graphql } from "gatsby";

import SEO from "../components/SEO";
import {title, description, siteUrl} from '../../site-meta-config'

const Search = () => {
  return (
    <Template>
      <SEO title={title} description={description} url={siteUrl} />
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Template>
  );
};

export default Search;

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
      publicURL
    }
  }
`;
