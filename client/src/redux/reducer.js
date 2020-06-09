import { ADD_USER, ADD_ROOM, ADD_ERROR } from './action';

const initialState = {
  user: null,
  room: null,
  error: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: action.newUser }

    case ADD_ROOM:
      return { ...state, room: action.newRoom }

    case ADD_ERROR:
      return { ...state, error: action.newError }
  
    default:
      return { ...state }
  }
}
