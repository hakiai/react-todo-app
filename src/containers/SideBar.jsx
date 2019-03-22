import { connect } from 'react-redux';

import Actions from '../actions/MainActions';
import SideBar from '../components/SideBar';

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentMember(value) {
      dispatch(Actions.changeCurrent(value))
    },
    addNewMember(value) {
      dispatch(Actions.addMember(value))
    },
    deleteMember(key, value) {
      dispatch(Actions.deleteMember(key, value))
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
