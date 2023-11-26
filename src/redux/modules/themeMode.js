const TOGGLE_THEME = 'TOGGLE_THEME'

export const toggleTheme = () => {
  return {
    type: TOGGLE_THEME,
  }
}

const initState = {
  mode: localStorage.getItem('themeMode')
    ? localStorage.getItem('themeMode')
    : 'light',
}

const themeMode = (state = initState, { type, payload }) => {
  switch (type) {
    case TOGGLE_THEME:
      if (state.mode === 'light') {
        localStorage.setItem('themeMode', 'dark')
        return { ...state, mode: 'dark' }
      } else {
        localStorage.setItem('themeMode', 'light')
        return { ...state, mode: 'light' }
      }

    default:
      return state
  }
}

export default themeMode
