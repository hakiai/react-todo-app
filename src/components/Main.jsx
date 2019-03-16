import React from 'react';
import { createGlobalStyle } from 'styled-components';
import HeaderArea from './HeaderArea';
import MainArea from './MainArea';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <HeaderArea />
        <MainArea />
      </React.Fragment>
    );
  }
}

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
