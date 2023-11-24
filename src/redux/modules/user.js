const GET_USER_INFO = 'GET_USER_INFO'
const DELETE_USER_INFO = 'DELETE_USER_INFO'
const UPDATE_USER_INFO = 'UPDATE_USER_INFO'
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
export const upDateUserInfo = (payload) => {
  return {
    type: UPDATE_USER_INFO,
    payload,
  }
}

const defaultUserData = {
  displayName: '',
  email: '',
  photoURL: '',
}
const initState = {
  currentUserInfo: defaultUserData,
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
        currentUserInfo: defaultUserData,
      }
    case UPDATE_USER_INFO:
      return {
        ...state,
        currentUserInfo: {
          ...state.currentUserInfo,
          displayName: payload.displayName,
          photoURL: payload.photoURL,
          introduce: payload.introduce,
        },
      }
    default:
      return state
  }
}

export default user
