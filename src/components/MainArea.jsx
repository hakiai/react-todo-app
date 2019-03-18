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
        <SideBar
          members={this.props.members}
          currentMember={this.props.currentMember}
          changeCurrentMember={this.props.changeCurrentMember}
          addNewMember={this.props.addNewMember}
          deleteMember={this.props.deleteMember}
        />
        <TodoArea
          currentMember={this.props.currentMember}
          currentMember={this.props.currentMember}
          todos={this.props.todos}
          addTodo={this.props.addTodo}
          deleteTodo={this.props.deleteTodo}
        />
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
