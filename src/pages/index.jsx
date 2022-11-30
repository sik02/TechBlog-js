import React, { useMemo } from "react";

import PostList from "../components/PostList/PostList";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import Bio from "../components/Bio/Bio";

import SideTagList from "../components/SideTagList/SideTagList";

import { graphql } from "gatsby";
import _ from "lodash"


import queryString from "query-string";

import { title, description, siteUrl } from "../../site-meta-config";

const IndexPage = ({ location, data }) => {
  const posts = data.allMarkdownRemark.nodes
  const tags = _.sortBy(data.allMarkdownRemark.group, ["totalCount"]).reverse()

  const parsed = queryString.parse(location.search);

  const gatsbyImageData = data.file.childImageSharp.gatsbyImageData;

  const selectedCategory =
    typeof parsed.category !== "string" || !parsed.category
      ? "All"
      : parsed.category;

  // const categoryList = useMemo(
  //   () =>
  //     data.allMarkdownRemark.nodes.reduce(
  //       (
  //         list,
          
  //         {
  //           node: {
  //             frontmatter: { categories },
  //           },
  //         }
  //       ) => {
  //         categories.forEach((category) => {
  //           if (list[category] === undefined) list[category] = 1;
  //           else list[category]++;
  //         });

  //         list["All"]++;

  //         return list;
  //       },
  //       { All: 0 }
  //     ),
  //   []
  // );

  return (
    <Layout>
      <SEO title={title} description={description} url={siteUrl} />
      <Bio profileImage={gatsbyImageData} />
      <SideTagList tags={tags} postCount={posts.length} />
      <PostList postList={posts} />
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
      sort: {order: DESC, fields: [frontmatter___date, frontmatter___title]}
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          categories
          date
          summary
          title
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 768, height: 400)
            }
          }
        }
      }
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
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
