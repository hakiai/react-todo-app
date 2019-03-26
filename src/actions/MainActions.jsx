const Actions = {
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
  addTodo: (value, currentMember) => {
    return {
      type: 'ADD_TODO',
      value,
      currentMember,
    }
  },
  deleteTodo: (key, currentMember) => {
    return {
      type: 'DELETE_TODO',
      key,
      currentMember
    }
  }
}

export default Actions
