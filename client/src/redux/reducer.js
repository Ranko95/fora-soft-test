import { ADD_USER, ADD_ROOM } from './action';

const initialState = {
  user: '',
  room: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: action.newUser }

    case ADD_ROOM:
      return { ...state, room: action.newRoom }
  
    default:
      return { ...state }
  }
}
