import React from "react"
import styled from "@emotion/styled"
import PostItem from "./PostItem"


const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
`

const PostList = ({ posts }) => {
  return (
    <PostListWrapper>
      {posts.map(({ node: { id, frontmatter } }) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </PostListWrapper>
  )
}

export default PostList
