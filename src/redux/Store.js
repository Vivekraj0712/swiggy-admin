import reducer from './reducers/reducer';
import dishReducer from './reducers/dishreducer';
import testReducer from './reducers/testReducer';
import subjectReducer from './reducers/subjectReducer';
import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';

// const appReducer = combineReducers({
// 	reducer,
// 	dish: dishReducer,
// 	testReducer,
// 	subjectReducer
	
// });
 const store = createStore(reducer);
//const store = createStore(appReducer, {});

export default store;
