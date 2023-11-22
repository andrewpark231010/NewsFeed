import { combineReducers, createStore } from 'redux'
import { themeMode, modalToggle } from '../modules'

const reducers = combineReducers({ themeMode, modalToggle })
const store = createStore(reducers)

export default store
