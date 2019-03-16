import React from 'react';
import styled from 'styled-components';

export default class TodoArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TodoContainer>
        <ul>
          <li>
            朝起きる
          </li>
          <li>
            昼食う
          </li>
          <li>
            夜寝る
          </li>
          <li>
            勉強する
          </li>
        </ul>
      </TodoContainer>
    )
  }
}

const TodoContainer = styled.div`
  width: calc(100% - 200px);
  height: 100%;
`
