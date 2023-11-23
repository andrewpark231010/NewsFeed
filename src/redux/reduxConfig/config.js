import { combineReducers, createStore } from 'redux'
import { themeMode, modalToggle, user, postData } from '../modules'

const reducers = combineReducers({ themeMode, modalToggle, user, postData })

const store = createStore(reducers)

export default store
