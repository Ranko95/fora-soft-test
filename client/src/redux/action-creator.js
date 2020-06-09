import { ADD_USER, ADD_ROOM, ADD_ERROR } from './action';

export const addUserAC = (name) => ({
  type: ADD_USER,
  newUser: name
});

export const addRoomAC = (room) => ({
  type: ADD_ROOM,
  newRoom: room
});

export const addErrorAC = (error) => ({
  type: ADD_ERROR,
  newError: error
})

export const fetchNewUserAC = (name, email, password) => {
  return async (dispatch) => {
    const response = await fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password }),
    });
    const result = await response.json();
    if (result.newUser) {
      dispatch(addUserAC(result.newUser));
    } else {
      dispatch(addErrorAC(result.error));
    }
  }
}

export const fetchLoginAC = (email, password) => {
  return async (dispatch) => {
    const response = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password }),
    });
    const result = await response.json();
    console.log(result);
    if (result.user) {
      dispatch(addUserAC(result.user));
    } else {
      dispatch(addErrorAC(result.error));
    }
  }
}

export const fetchNewRoomAC = (name, userId) => {
  return async (dispatch) => {
    const response = await fetch('http://localhost:5000/rooms/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, userId })
    });
    const result = await response.json();
    dispatch(addRoomAC(result.newRoom));
  }
}
