import lightTitleLogo from './images/HeaderImage/titleLogo_light.jpg'
import darkTitleLogo from './images/HeaderImage/titleLogo_dark.jpg'
const darkTheme = {
  mainColor: '#fff',
  mainBackgroundColor: '#1E1E20',
  cardBorder: '2px solid #DCDCDC',
  logoImage: darkTitleLogo,
  modalBackground: '#c5c5c9',
  inputColor: '#E0E0E0',
  loginFormColor: '#000',
  btnToggleAreaBackground: '#8a8a8f',
}
const lightTheme = {
  mainColor: '#292929',
  mainBackgroundColor: '#fff',
  cardBorder: '2px solid transparent',
  logoImage: lightTitleLogo,
  modalBackground: '#fff',
  inputColor: 'transparent',
  loginFormColor: '#888888',
  btnToggleAreaBackground: '#fff',
}

export default { dark: darkTheme, light: lightTheme }
