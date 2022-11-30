import React from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');

  :root{
    --main-bg: #121212;
    --white-text: #fff;
    --tag-bg: #252525;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nanum Myeongjo', serif;
    /* background: #35363a; */
    background: var(--main-bg);

  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    /* color: inherit; */
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }
`

const GlobalStyle = () => {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle