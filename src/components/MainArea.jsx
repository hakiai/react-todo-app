import React from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import TodoArea from './TodoArea';


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
`
