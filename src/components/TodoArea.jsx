// @flow

import React from 'react';
import styled from 'styled-components';

const TodoArea = (props: Object) => {
  if (props.members.indexOf(props.match.params.member) >= 0) {
    return (
      <TodoContainer>
        <h1>{props.members.indexOf(props.match.params.member >= 0) ? props.match.params.member : ''}</h1>
        <div>
          <input id="todo_input" type="text"></input>
          <button onClick={() => { onClickAddTodo(props) }}>add Todo</button>
        </div>
        <ul>
          {renderTodos(props)}
        </ul>
      </TodoContainer>
    )
  } else {
    return (
      <p>メンバーを追加、選択してください</p>
    )
  }
}

const renderTodos = (props) => {
  const todoList = [];
  props.todos[props.match.params.member].forEach((todo, key) => {
    todoList.push(
      <li key={key + 1} className="todo">
        {key + 1}. {todo}
        <button className="deleteTodo" onClick={() => {
          onClickDelete(props, key)
        }}>Delete</button>
      </li>
    )
  });
  return todoList;
}

const onClickAddTodo = (props) => {
  const newTodo: ?HTMLElement = document.getElementById('todo_input');
  if (newTodo instanceof HTMLInputElement && newTodo.value !== "") {
    props.addTodo(newTodo.value, props.match.params.member);
    newTodo.value = '';
  }
}

const onClickDelete = (props, key) => {
  props.deleteTodo(key, props.match.params.member);
}

export default TodoArea;

const TodoContainer = styled.div`
  width: calc(100% - 250px);
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
    .deleteTodo {
      float: right;
    }
  }

`
