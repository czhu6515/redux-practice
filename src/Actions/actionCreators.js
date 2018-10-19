export const createBook = (id, title, author) = ({
  type: 'CREATE_BOOK',
  payload: {id, title, author}
})

export const readBookByID = (id) = ({
  type: 'READ_BOOK_BY_ID',
  payload: id
})

export const readBookByTitle = (title) = ({
  type: 'READ_BOOK_BY_ID',
  payload: title
})

export const readBookByID = (author) = ({
  type: 'READ_BOOK_BY_ID',
  payload: author
})

export const updateBookByID = (id) = ({
  type: 'UPDATE_BOOK_BY_ID',
  payload: id
})

export const updateBookByTitle = (title) = ({
  type: 'UPDATE_BOOK_BY_ID',
  payload: title
})

export const updateBookByID = (author) = ({
  type: 'UPDATE_BOOK_BY_ID',
  payload: author
})

export const deleteBookByID = (id) = ({
  type: 'DELETE_BOOK_BY_ID',
  payload: id
})

export const deleteBookByTitle = (title) = ({
  type: 'DELETE_BOOK_BY_ID',
  payload: title
})

export const deleteBookByID = (author) = ({
  type: 'DELETE_BOOK_BY_ID',
  payload: author
})