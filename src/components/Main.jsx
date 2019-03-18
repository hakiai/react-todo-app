import React from 'react';
import { createGlobalStyle } from 'styled-components';
import HeaderArea from './HeaderArea';
import MainArea from './MainArea';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [
        "hakiai",
        "tomonori",
      ],
      todos: {
        hakiai: [
          'eat breakfast',
          'study English',
        ],
        tomonori: [],
      },
      // 現在表示しているメンバー
      currentMember: 'hakiai',
    };
  }

  changeCurrentMember(name) {
    this.setState({ currentMember: name });
  }

  addNewMember(member) {
    const newMembers = this.state.members
    newMembers.push(member);
    const newTodo = this.state.todos;
    newTodo[member] = [];
    this.setState({
      members: newMembers,
      todos: newTodo,
      currentMember: member,
    });
  }

  deleteMember(key, name) {
    // メンバーの削除
    const members = this.state.members;
    members.splice(key, 1);

    this.setState({
      members: members,
    });
  }

  addTodo(todo) {
    const todos = this.state.todos;
    todos[this.state.currentMember].push(todo);
    this.setState({ todo: todos });
  }

  deleteTodo(key) {
    const todos = this.state.todos;
    todos[this.state.currentMember].splice(key, 1);
    this.setState({ todos: todos });
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <HeaderArea />
        <MainArea members={this.state.members}
          currentMember={this.state.currentMember}
          changeCurrentMember={this.changeCurrentMember.bind(this)}
          todos={this.state.todos}
          addNewMember={this.addNewMember.bind(this)}
          addTodo={this.addTodo.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
          deleteMember={this.deleteMember.bind(this)}
        />
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
