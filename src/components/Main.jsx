// @flow

import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import HeaderArea from './HeaderArea';
import MainArea from './MainArea';

const Main = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <HeaderArea />
      <MainArea />
    </React.Fragment>
  )
}

export default Main;

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  h1 {
    margin: 0;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`
