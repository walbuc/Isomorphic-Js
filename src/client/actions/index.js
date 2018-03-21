import { FETCH_USERS, FETCH_CURRENT_USER, FETCH_ADMINS } from './types'

//This function is autmatically called with redux thunk
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users')//prepended /api for client
  return dispatch({
    type: FETCH_USERS,
    payload: res
  })
}

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user')
  return dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  })
}

export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins')
  return dispatch({
    type: FETCH_ADMINS,
    payload: res
  })
}
