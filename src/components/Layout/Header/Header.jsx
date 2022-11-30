import React from "react";
import { BsSearch } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

import {
  Headers,
  HeaderContainer,
  LogoContainer,
  Logo,
  SearchBarContainer,
  Button,
} from "./HeaderElements";

const Header = function () {
  return (
    <>
      <Headers>
        <HeaderContainer>
          <LogoContainer>
            <Logo href="/">Sling.blog</Logo>
          </LogoContainer>
          <SearchBarContainer>
            {/* <label htmlFor="search"></label>
            <SearchBar
              name="search"
              value=""
              type="text"
              placeholder="   Search"
            ></SearchBar> */}
            <Button to="/">
              <BsMoon size={24} style={{ background: "inherit" }} />
            </Button>
            <Button to="/search">
              <BsSearch size={24} style={{ background: "inherit" }} />
            </Button>
          </SearchBarContainer>
        </HeaderContainer>
      </Headers>
    </>
  );
};

export default Header;
