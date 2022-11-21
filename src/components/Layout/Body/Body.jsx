import React from 'react'
import styled from "@emotion/styled"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Body = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Body