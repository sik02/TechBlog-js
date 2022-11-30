import React from "react";
import _ from "lodash";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const RelativeWrapper = styled.div`
  position: relative;
`;

const AsideWrapper = styled.aside`
  position: absolute;
  left: 77%;
  top: 30px;
  width: 200px;
  height: 100px;
  font-size: 16px;
`;

const SideTagListTitle = styled.div`
  margin-bottom: 25px;
  font-weight: bold;
  color: #fff;
`;

const TagItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #fff;
`;

const SideTagList = ({ tags, postCount }) => {
  return (
    <RelativeWrapper>
      <AsideWrapper>
        <SideTagListTitle>Tag List</SideTagListTitle>
        <TagItem>
          <Link to="/?category=All">All ({postCount})</Link>
        </TagItem>
        {_.map(tags, (tag) => (
          <TagItem key={tag.fieldValue}>
            <Link to={`/?category=${tag.fieldValue}`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </TagItem>
        ))}
      </AsideWrapper>
    </RelativeWrapper>
  );
};

export default SideTagList;
