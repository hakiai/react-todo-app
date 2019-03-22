const Actions = {
  changeCurrent: (value) => {
    return {
      type: 'CHANGE_CURRENT',
      value,
    }
  },
  addMember: (value) => {
    return {
      type: 'ADD_MEMBER',
      value,
    }
  },
  deleteMember: (key, value) => {
    return {
      type: 'DELETE_MEMBER',
      key,
      value,
    }
  },
  addTodo: (value) => {
    return {
      type: 'ADD_TODO',
      value
    }
  },
  deleteTodo: (key) => {
    return {
      type: 'DELETE_TODO',
      key,
    }
  }
}

export default Actions
