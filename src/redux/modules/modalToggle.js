const LOGIN_SIGNUP_TOGGLE = 'LOGIN_SIGNUP_TOGGLE'
const LOGIN_SIGNUP_MODE_CHANGE = 'LOGIN_SIGNUP_MODE_CHANGE'
const EDIT_TOGGLED = 'EDIT_TOGGLED'
const DETAIL_TOGGLED = 'DETAIL_TOGGLED'
const SET_DETAIL_MODAL_DATA = 'SET_DETAIL_MODAL_DATA'
export const loginSignUpModalToggle = () => {
  return {
    type: LOGIN_SIGNUP_TOGGLE,
  }
}
export const loginSignUpModalModeChange = () => {
  return {
    type: LOGIN_SIGNUP_MODE_CHANGE,
  }
}
export const editModalToggle = () => {
  return { type: EDIT_TOGGLED }
}
export const detailModalToggle = () => {
  return { type: DETAIL_TOGGLED }
}
export const setDetailModalData = (payload) => {
  return { type: SET_DETAIL_MODAL_DATA, payload }
}

const LoginSignUpMode = [
  {
    id: 0,
    text: '로그인',
    modeChangeComment: '아직 회원이 아니신가요?',
    changeMode: '회원가입',
  },
  {
    id: 1,
    text: '회원가입',
    modeChangeComment: '이미 회원이신가요?',
    changeMode: '로그인',
  },
]

const initState = {
  loginSignUpToggled: false,
  loginSignUpModalMode: LoginSignUpMode[0],
  detailToggled: false,
  editToggled: false,
  currentDetailCardData: {},
}

const themeMode = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_SIGNUP_TOGGLE:
      return {
        ...state, //복사
        loginSignUpToggled: state.loginSignUpToggled ? false : true, // 새로 갱신
      }
    case LOGIN_SIGNUP_MODE_CHANGE:
      return {
        ...state,
        loginSignUpModalMode:
          state.loginSignUpModalMode.id === 0
            ? LoginSignUpMode[1]
            : LoginSignUpMode[0],
      }
    // 수정
    case EDIT_TOGGLED:
      return {
        ...state,
        editToggled: !state.editToggled,
      }
    case DETAIL_TOGGLED:
      return {
        ...state,
        detailToggled: !state.detailToggled,
      }
    case SET_DETAIL_MODAL_DATA:
      return {
        ...state,
        currentDetailCardData: payload,
      }
    default:
      return state
  }
}
export default themeMode
