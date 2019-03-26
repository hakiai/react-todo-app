// @flow

import React from 'react';
import styled from 'styled-components';

const HeaderArea = () => {
  return (
    <Header>
      <Title>Todo App</Title>
    </Header>
  );
}

export default HeaderArea;

const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: #EFDEB8;
  text-align: center;
  box-shadow: 0 5px 5px 0 rgb(0, 0, 0, 0.5);
  z-index: 10;
  position: relative;
`;

const Title = styled.h1`
  line-height: 70px;
`
