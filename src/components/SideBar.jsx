import React from 'react';
import styled from 'styled-components';

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTodo() {
    const displayMember = [];
    this.props.members.forEach((member, key) => {
      displayMember.push(
        <li key={key} >
          <button className={member} onClick={this.onClickMember.bind(this)}>change</button>
          {member}
          <button className="deleteMember" onClick={() => {
            this.onClickDeleteMember(key, member);
          }}>×</button>
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
    this.props.changeCurrentMember(event.target.className);
  }

  onClickDeleteMember(key, member) {
    this.props.deleteMember(key, member);
  }

  render() {
    return (
      <SideArea>
        <label>new member：<input id="newMember" type="text" placeholder="members name"></input></label>
        <button onClick={this.onClickAddMemberButton.bind(this)}>add new member</button>
        <MemberList>
          {this.renderTodo()}
        </MemberList>
      </SideArea>
    );
  }
}

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
