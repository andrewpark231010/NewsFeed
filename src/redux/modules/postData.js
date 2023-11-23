const SET_POST_DATA = 'SET_POST_DATA'

export const setPostData = (payload) => {
  return {
    type: SET_POST_DATA,
    payload,
  }
}

const initState = {
  postData: [],
}

const postData = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_POST_DATA:
      return {
        ...state,
        postData: payload,
      }
    default:
      return state
  }
}

export default postData
