import { combineReducers, createStore } from 'redux'
import { themeMode } from '../modules'

const reducers = combineReducers({ themeMode })
const store = createStore(reducers)

export default store
