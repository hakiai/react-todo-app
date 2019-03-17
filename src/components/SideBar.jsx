import React from 'react';
import styled from 'styled-components';

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.changeCurrentMember);
  }

  renderTodo() {
    const displayMember = [];
    this.props.members.forEach((member, key) => {
      displayMember.push(
        <li key={key} onClick={this.onClickMember.bind(this)}>
          {member}
        </li>
      );
    });
    return displayMember;
  }

  onClickAddMemberButton() {
    const newMemberName = document.getElementById('newMember');
    this.props.addNewMember(newMemberName.value);
    newMemberName.value = "";
  }

  onClickMember(event) {
    this.props.changeCurrentMember(event.target.innerHTML);
  }

  render() {
    return (
      <SideArea>
        <label>新規メンバー：<input id="newMember" type="text" placeholder="メンバー名"></input></label>
        <button onClick={this.onClickAddMemberButton.bind(this)}>追加</button>
        <MemberList>
          {this.renderTodo()}
        </MemberList>
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

const MemberList = styled.ul`
    list-style: none;
    padding: 0;
    & > li {
      cursor: pointer;
      margin: 10px;
    }
`;
