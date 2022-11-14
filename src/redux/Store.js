import reducer from './reducers/reducer';
import dishReducer from './reducers/dishreducer';
import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
	reducer,
	dish: dishReducer,
});
// const store = createStore(reducer, {});
const store = createStore(appReducer, {});

export default store;
