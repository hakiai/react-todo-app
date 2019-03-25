// @flow

import React from 'react';
import styled from 'styled-components';

const SideBar = (props: Object) => {
  return (
    <SideArea>
      <label>new member：<input id="newMember" type="text" placeholder="members name"></input></label>
      <button onClick={() => { onClickAddMemberButton(props) }}>add new member</button>
      <MemberList>
        {renderTodo(props)}
      </MemberList>
    </SideArea>
  );
}

const renderTodo = (props) => {
  const displayMember = [];
  props.members.forEach((member, key) => {
    displayMember.push(
      <li key={key} >
        <button className={member} onClick={() => { onClickMember(props) }}>change</button>
        {member}
        <button className="deleteMember" onClick={() => {
          onClickDeleteMember(props, key, member);
        }}>×</button>
      </li>
    );
  });
  return displayMember;
}

const onClickAddMemberButton = (props, event) => {
  const newMemberName = document.getElementById('newMember');
  if (newMemberName instanceof HTMLInputElement) {
    props.addNewMember(newMemberName.value);
    newMemberName.value = "";
  }
}

const onClickMember = (props) => {
  if (event instanceof MouseEvent) {
    props.changeCurrentMember(event.target.className);
  }
}

const onClickDeleteMember = (props, key, member) => {
  props.deleteMember(key, member);
}

export default SideBar;

const SideArea = styled.div`
  width: 250px;
  height: 100%;
  background-color: #6FB3B7;
  padding: 10px;
  box-sizing: border-box;
  #newMember {
    width: 80%;
  }
`;

const MemberList = styled.ul`
    list-style: none;
    padding: 0;
    & > li {
      margin: 10px;
      .deleteMember {
        float: right;
      }
    }
`;
