import React from "react"
import styled from "@emotion/styled"
import GlobalStyle from "../GlobalStyle/GlobalStyle"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Body from './Body/Body'

import SEO from "../SEO"



const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Body>{children}</Body>
      <Footer />
      </>
  )
}

export default Layout
