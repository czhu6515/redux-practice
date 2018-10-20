const books = (state={}, action) => {
  switch(action.type) {
    case 'CREATE_BOOK':
        state.push(action.payload)
        break;
  }
  return state
}

export default books