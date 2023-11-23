const GET_USER_INFO = 'GET_USER_INFO'
const DELETE_USER_INFO = 'DELETE_USER_INFO'

export const getUserInfo = (payload) => {
  return {
    type: GET_USER_INFO,
    payload,
  }
}

export const deleteUserInfo = () => {
  return {
    type: DELETE_USER_INFO,
  }
}

const initState = {
  currentUserInfo: null,
}

const user = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_USER_INFO:
      return {
        ...state,
        currentUserInfo: payload,
      }
    case DELETE_USER_INFO:
      return {
        ...state,
        currentUserInfo: null,
      }
    default:
      return state
  }
}

export default user
