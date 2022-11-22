import React, { useMemo } from "react";

import PostList from "../components/PostList/PostList";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import Bio from "../components/Bio/Bio";

import SideTagList from "../components/SideTagList/SideTagList";

import { graphql } from "gatsby";

import queryString from "query-string";

import { title, description, siteUrl } from "../../site-meta-config";

const IndexPage = ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) => {
  const parsed = queryString.parse(search);

  const selectedCategory =
    typeof parsed.category !== "string" || !parsed.category
      ? "All"
      : parsed.category;

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list,
          {
            node: {
              frontmatter: { categories },
            },
          }
        ) => {
          categories.forEach((category) => {
            if (list[category] === undefined) list[category] = 1;
            else list[category]++;
          });

          list["All"]++;

          return list;
        },
        { All: 0 }
      ),
    []
  );

  return (
    <Layout>
      <SEO title={title} description={description} url={siteUrl} />
      <Bio profileImage={gatsbyImageData} />
      <SideTagList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Layout>
  );
};

export default IndexPage;

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
