import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const Tag = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagItem = styled(({ active, ...props }) => <Link {...props} />)`
  margin-right: 0.6rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  /* background: #d8d8d8; */
  background: var(--tag-bg);
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
`;

const TagList = ({ tagList }) => {
  return (
    <Tag>
      {tagList.map((tag) => (
        <TagItem
          to={`/?category=${tag}`}
          active={true}
          key={tag}
        >
          {tag}
        </TagItem>
      ))}
    </Tag>
  );
};

export default TagList;
