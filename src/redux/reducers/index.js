import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from './PostReducer';
import restaurantReducer from './RestaurantReducer';
import dishReducer from './DishReducer';
const appReducer = combineReducers({
	posts: postsReducer,
	restaurants:restaurantReducer,
	dishes:dishReducer	
});

const reducer = (state, action) => {
	return appReducer(state, action);
};
export default reducer;