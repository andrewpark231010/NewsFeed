import {combineReducers, createStore} from 'redux';
import {ThemeModeReducer} from '../modules';

const reducers = combineReducers({ThemeModeReducer});
const store = createStore(reducers);

export default store;
