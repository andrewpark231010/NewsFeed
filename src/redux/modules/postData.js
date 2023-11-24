const SET_POST_DATA = 'SET_POST_DATA'
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'
export const setPostData = (payload) => {
  return {
    type: SET_POST_DATA,
    payload,
  }
}
export const setSearchValue = (payload) => {
  return {
    type: SET_SEARCH_VALUE,
    payload,
  }
}
const initState = {
  postData: [],
  searchValue: '',
}

const postData = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_POST_DATA:
      return {
        ...state,
        postData: payload,
      }
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: payload,
      }
    default:
      return state
  }
}

export default postData
