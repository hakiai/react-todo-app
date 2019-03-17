import React from 'react';
import styled from 'styled-components';

export default class TodoArea extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTodos() {
    const todoList = [];
    this.props.todos[this.props.currentMember].forEach((todo, key) => {
      todoList.push(
        <li key={key + 1}>
          {key + 1}. {todo}
          <button>Delete</button>
        </li>
      )
    });
    return todoList;
  }

  onClickAddTodo() {
    const newTodo = document.getElementById('todo_input');
    this.props.addTodo(newTodo.value);
    newTodo.value = '';
  }

  render() {
    return (
      <TodoContainer>
        <h1>{this.props.currentMember}</h1>
        <div>
          <input id="todo_input" type="text"></input>
          <button onClick={this.onClickAddTodo.bind(this)}>add Todo</button>
        </div>
        <ul>
          {this.renderTodos()}
        </ul>
      </TodoContainer>
    )
  }
}

const TodoContainer = styled.div`
  width: calc(100% - 200px);
  height: 100%;
  & > div {
    margin-top: 30px;
    text-align: center;
    width: 100%;
    & > input {
    width: 80%;
    }
  }

  & > ul > li {
    list-style: none;
    margin: 20px;
  }

`
