import { ADD_USER, ADD_ROOM } from './action';

export const addUserAC = (name) => ({
  type: ADD_USER,
  newUser: name
});

export const addRoomAC = (room) => ({
  type: ADD_ROOM,
  newRoom: room
});
