// @flow

import React from 'react';
import styled from 'styled-components';
import SideBar from '../containers/SideBar';
import TodoArea from '../containers/TodoArea';

const MainArea = () => {
  return (
    <MainContainer>
      <SideBar />
      <TodoArea />
    </MainContainer>
  );
}

export default MainArea;

const MainContainer = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  background-color: #FFF9EA;
`
