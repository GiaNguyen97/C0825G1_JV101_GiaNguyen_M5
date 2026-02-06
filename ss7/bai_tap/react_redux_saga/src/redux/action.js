export const GET_USERS = 'GET_USERS';
export const SET_USERS = 'SET_USERS';
export const DELETE_USER = 'DELETE_USER';
export const USER_DELETED = 'USER_DELETED';

export const getUsers = () => ({
  type: GET_USERS
});

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id
});

export const userDeleted = (id) => ({
  type: USER_DELETED,
  payload: id
});
