/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />

        <title>Quiz de Minecraft</title>
        <meta name="title" content="Quiz de Minecraft" />
        <meta name="description" content="Um quiz sobre o grande mundo quadrado de Minecraft com infinitas possibilidades.." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://minequiz.vercel.app/" />
        <meta property="og:title" content="Quiz de Minecraft" />
        <meta property="og:description" content="Um quiz sobre o grande mundo quadrado de Minecraft com infinitas possibilidades.." />
        <meta property="og:image" content="https://www.quizexpo.com/wp-content/uploads/2020/07/cover-2-850x491.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://minequiz.vercel.app/" />
        <meta property="twitter:title" content="Quiz de Minecraft" />
        <meta property="twitter:description" content="Um quiz sobre o grande mundo quadrado de Minecraft com infinitas possibilidades.." />
        <meta property="twitter:image" content="https://www.quizexpo.com/wp-content/uploads/2020/07/cover-2-850x491.jpg" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
