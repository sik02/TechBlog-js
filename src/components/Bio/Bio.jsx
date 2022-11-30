import React from "react";
import styled from "@emotion/styled";
import BioProfile from "./BioProfile";

import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Background = styled.div`
  width: 100%;
  background: var(--main-bg);
  color: var(--white-text);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 768px;
  height: 260px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`;
const ProfileWrapper = styled.div`
  display: flex;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

const SubTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 20px;
  font-weight: 700;
  color: #adb5bd;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const Icon = styled.div`
  margin-top: 10px;
  font-size: 20px;
`;

const IconWrapper = styled.a`
  margin-left: 10px;
  cursor: pointer;
  color: #adb5bd;
  font-size: 20px;

  &:hover {
    color: #fff;
    transition: all 0.3s ease;
  }

  &:first-of-type {
    margin-left: 0;
  }
`;

const Line = styled.hr`
  width: 768px;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #adb5bd;
`;

const Bio = ({ profileImage }) => {
  return (
    <>
      <Background>
        <Wrapper>
          <ProfileWrapper>
            <LeftContainer>
              <BioProfile profileImage={profileImage} />
            </LeftContainer>
            <RightContainer>
              <SubTitle>@ Sling</SubTitle>
              <Title>꾸준한 성장을 위한 기록</Title>
              <Icon>
                <IconWrapper href="https://github.com/sik02">
                  <BsGithub />
                </IconWrapper>
                <IconWrapper href="https://www.instagram.com/sik_k_da/">
                  <FaInstagram />
                </IconWrapper>
                <IconWrapper>
                  <FiMail />
                </IconWrapper>
              </Icon>
            </RightContainer>
          </ProfileWrapper>
        </Wrapper>
      </Background>
      <Line />
    </>
  );
};

export default Bio;
