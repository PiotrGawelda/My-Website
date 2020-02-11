import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body { 
    margin: 0;
    padding: 0;
    font-family: 'Lato';
  }
  body, body * {
    box-sizing: border-box;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const Layout = ({children}) => {
    return(
      <>
        <GlobalStyle/>
        <main>{children}</main>
      </>
    )
}

export default Layout