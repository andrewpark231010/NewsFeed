import { dark, light } from '../../styles/images'

const TOGGLE_THEME = 'TOGGLE_THEME'

export const toggleTheme = () => {
  return {
    type: TOGGLE_THEME,
  }
}

const initState = {
  mode: localStorage.getItem('themeMode'),
  iconImage: localStorage.getItem('themeMode') === 'light' ? light : dark,
}

const themeMode = (state = initState, { type }) => {
  switch (type) {
    case TOGGLE_THEME:
      if (state.mode === 'light') {
        localStorage.setItem('themeMode', 'dark')
        return { ...state, mode: 'dark', iconImage: dark }
      } else {
        localStorage.setItem('themeMode', 'light')
        return { ...state, mode: 'light', iconImage: light }
      }
    default:
      return state
  }
}

export default themeMode
