import React, { useMemo } from "react"
import styled from "@emotion/styled"
import PostItem from "./PostItem"

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 20px 0 100px;
`

const PostList = ({ selectedCategory, posts }) => {
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }) =>
          selectedCategory !== "All"
            ? categories.includes(selectedCategory)
            : true
      ),
    [selectedCategory]
  )
  return (
    <PostListWrapper>
      {postListData.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }) => (
          <PostItem
            {...frontmatter}
            link={slug}
            key={id}
          />
        )
      )}
    </PostListWrapper>
  )
}

export default PostList
