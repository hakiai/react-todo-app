import React from 'react';
import styled from 'styled-components';
import SideBar from '../containers/SideBar';
import TodoArea from '../containers/TodoArea';


export default class MainArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainContainer>
        <SideBar />
        <TodoArea />
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  background-color: #FFF9EA;
`
