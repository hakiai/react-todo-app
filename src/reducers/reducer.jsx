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
  currentMember: 'hakiai',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT': {
      return {
        currentMember: action.value,
      }
    }
    case 'ADD_MEMBER': {
      return {
        members: state.members.push(action.value),
      }
    }
    case 'DELETE_MEMBER': {
      return {
        members: state.members.splice(action.key, 1),
      }
    }
    case 'ADD_TODO': {
      return {
        todos: state.todos[state.currentMember].push(action.value),
      }
    }
    case 'DELETE_TODO': {
      return {
        todos: state.todos[state.currentMember].splice(action.key, 1),
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer
