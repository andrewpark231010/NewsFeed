import { dark, light } from '../../styles/images'

const TOGGLE_THEME = 'TOGGLE_THEME'

export const toggleTheme = () => {
  return {
    type: TOGGLE_THEME,
  }
}

const initState = {
  mode: 'light',
  iconImage: light,
}

const themeMode = (state = initState, { type }) => {
  switch (type) {
    case TOGGLE_THEME:
      return state.mode === 'light'
        ? { ...state, mode: 'dark', iconImage: dark }
        : { ...state, mode: 'light', iconImage: light }
    default:
      return state
  }
}

export default themeMode
