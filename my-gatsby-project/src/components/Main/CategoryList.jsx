import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"


const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;
`

const CategoryItem = styled(({ active, ...props }) => <Link {...props} />)`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? "800" : "400")};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`

const CategoryList = ({ selectedCategory, categoryList }) => {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList
