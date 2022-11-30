import styled from "@emotion/styled";
import { Link } from "gatsby";

export const Headers = styled.div`
  height: 60px;
  background: var(--main-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 5px var(--main-bg);
  margin-bottom: 2px;
  position: sticky;
  z-index: 999;
  top: 0;
`;

export const HeaderContainer = styled.div`
  height: 60px;
  background: var(--main-bg);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 176px;
`;

export const LogoContainer = styled.div`
  width: 210px;
  display: flex;
  margin: 0;
  align-items: center;
`;

export const Logo = styled.a`
  color: #fff;
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  font-weight: bold;
`;

export const SearchBarContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  align-items: center;
`;

export const SearchBar = styled.input`
  height: 40px;
  width: 200px;
  border: none;
  background: #fff;
  outline: none;
  color: black;
  caret-color: white;
  border-bottom: 2px solid black;
  font-size: 15px;
  /* margin: 24px 0 0 20px; */
`;

// export const Button = styled(Link)`
//   background: transparent;
//   /* margin-top: 35px;
//   margin-left: 10px; */
//   color: #fff;
//   /* right: 30px; */
//   font-size: 18px;
//   border: none;
//   width: 50px;
//   height: 50px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
// `;

export const Button = styled(Link)`
  background: transparent;
  /* margin-top: 35px;
  margin-left: 10px; */
  color: #fff;
  /* right: 30px; */
  font-size: 18px;
  border: none;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  &:hover {
    border-radius: 100%;
    background: #424242;
  }
`;

// export const SearchBar = styled.div`
//   color: #fff;
//   display: flex;
//   justify-content: center;
//   font-size: 1.5rem;
//   align-items: center;
// `
