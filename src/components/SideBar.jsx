import React from 'react';
import styled from 'styled-components';

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SideArea>
        <label>新規グループ：<input type="text" placeholder="グループ名"></input></label>
        <button>追加</button>
        <GroupList>
          <Group>
            吐合
          </Group>
          <Group>
            友紀
          </Group>
          <Group>
            はき
          </Group>
          <Group>
            とも
          </Group>
        </GroupList>
      </SideArea>
    );
  }
}

const SideArea = styled.div`
  width: 200px;
  height: 100%;
  background-color: #6FB3B7;
  padding: 10px;
  box-sizing: border-box;
`;

const GroupList = styled.ul``;

const Group = styled.li``;
