import React from "react"
import styled from "@emotion/styled"
import GlobalStyle from "./GlobalStyle"
import Footer from "./Footer"
import Header from "./Header"

import SEO from "../SEO"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Template = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default Template
