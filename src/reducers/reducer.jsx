// @flow

import _ from 'lodash';

const initialState = {
  members: [
    'hakiai',
    'tomonori',
  ],
  todos: {
    hakiai: [
      'eat breakfast',
      'study English',
    ],
    tomonori: [
      'study programming',
    ],
  },
};

const reducer = (state: Object = initialState, action: Object) => {
  let _state = _.cloneDeep(state);
  switch (action.type) {
    case 'ADD_MEMBER': {
      _state.members.push(action.value);
      _state.todos[action.value] = [];
      return _state;
    }
    case 'DELETE_MEMBER': {
      _state.members.splice(action.key, 1);
      delete _state.todos[action.value];
      return _state;
    }
    case 'ADD_TODO': {
      _state.todos[action.currentMember].push(action.value);
      return _state;
    }
    case 'DELETE_TODO': {
      _state.todos[action.currentMember].splice(action.key, 1);
      return _state;
    }
    default: {
      return state;
    }
  }
}

export default reducer
