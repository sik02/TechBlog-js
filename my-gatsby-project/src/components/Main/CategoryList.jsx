import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const RelativeWrapper = styled.div`
  position: relative;
`

const AsideWrapper = styled.aside`
  position: absolute;
  left: 77%;
  top: 30px;
  width: 200px;
  height: 100px;
  font-size: 16px;
`

const SideTagList = styled.div`
  margin-bottom: 25px;
  font-weight: bold;
  color: #fff;
`

const TagItem =  styled(({ active, ...props }) => (
  <Link {...props} />
))`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #fff;
`

const CategoryList = ({ selectedCategory, categoryList }) => {
  return (
    <RelativeWrapper>
      <AsideWrapper>
        <SideTagList>Tag List</SideTagList>
            {Object.entries(categoryList).map(([name, count]) => (
              <TagItem
                to={`/?category=${name}`}
                active={name === selectedCategory}
                key={name}
              >
                {name} ({count})
              </TagItem>
            ))}  
      </AsideWrapper>
    </RelativeWrapper>
  )
}

export default CategoryList
