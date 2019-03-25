// @flow

import React from 'react';
import styled from 'styled-components';

const TodoArea = (props: Object) => {
  return (
    <TodoContainer>
      <h1>{props.currentMember}</h1>
      <div>
        <input id="todo_input" type="text"></input>
        <button onClick={() => { onClickAddTodo(props) }}>add Todo</button>
      </div>
      <ul>
        {renderTodos(props)}
      </ul>
    </TodoContainer>
  )
}

const renderTodos = (props) => {
  const todoList = [];
  props.todos[props.currentMember].forEach((todo, key) => {
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
  if (newTodo instanceof HTMLInputElement) {
    props.addTodo(newTodo.value);
    newTodo.value = '';
  }
}

const onClickDelete = (props, key) => {
  props.deleteTodo(key);
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
