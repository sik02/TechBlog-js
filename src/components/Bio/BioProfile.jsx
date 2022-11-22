import React from "react"
import styled from "@emotion/styled"
import { GatsbyImage } from "gatsby-plugin-image"

import { graphql } from "gatsby"

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const BioProfile = ({ profileImage }) => {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default BioProfile