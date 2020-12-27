import React from "react";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html, body {
      width: 100%;
      min-height: 100vh;
      font-size: 18px;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

      @media only screen and (max-width: 600px) {
        font-size: 16px;
      }
    }

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}


    
`;

const ContainerStyled = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>timeline-demo</title>
      </Head>
      <GlobalStyle />
      <ContainerStyled>
        <Component {...pageProps} />
      </ContainerStyled>
    </>
  );
}

export default MyApp;
