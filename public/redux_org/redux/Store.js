import reducer from './reducers/reducer';
import { legacy_createStore as createStore } from 'redux';

// const appReducer = combineReducers({
// 	reducer,
// 	dish: dishReducer,
// 	testReducer,
// 	subjectReducer

// });
const store = createStore(reducer);
//const store = createStore(appReducer, {});

export default store;
