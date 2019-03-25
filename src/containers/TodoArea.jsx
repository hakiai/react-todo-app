import { connect } from 'react-redux';

import Actions from '../actions/MainActions';
import TodoArea from '../components/TodoArea';

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (value) => {
      dispatch(Actions.addTodo(value));
    },
    deleteTodo: (key) => {
      dispatch(Actions.deleteTodo(key));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoArea)
