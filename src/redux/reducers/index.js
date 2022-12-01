import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from './PostReducer';

const appReducer = combineReducers({
	posts: postsReducer,	
});

const reducer = (state, action) => {
	return appReducer(state, action);
};
export default reducer;