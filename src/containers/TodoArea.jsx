// @flow

import { connect } from 'react-redux';

import Actions from '../actions/MainActions';
import TodoArea from '../components/TodoArea';

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (value: HTMLElement, currentMember) => {
      dispatch(Actions.addTodo(value, currentMember));
    },
    deleteTodo: (key, currentMember) => {
      dispatch(Actions.deleteTodo(key, currentMember));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoArea)
