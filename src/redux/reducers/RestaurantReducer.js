import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apis from '../../api/ApiIndex';

export const getAllRestaurants = createAsyncThunk('getAllRestaurants', async (payload, thunkAPI) => {
	
	const response = await apis.getAllRestaurants(payload)

	const { ok, problem, data } = response;
	if (ok) {
		return data;
	} else {
		return thunkAPI.rejectWithValue(problem);
	}
});


const STATUS = {
	NOT_STARTED: 0,
	SUCCESS: 1,
	FETCHING: 2,
	FAILED: 3,
};

const initialState = {
	allRestaurantsStatus: STATUS.NOT_STARTED,
};


const restaurantSlice = createSlice({
	name: 'restaurant',
	initialState,
	reducers: {
		
	},
	extraReducers: {
		[getAllRestaurants.pending]: (state) => {
			state.allRestaurantsStatus = STATUS.FETCHING;
		},
		[getAllRestaurants.rejected]: (state) => {
			state.allRestaurantsStatus = STATUS.FAILED;
		},
		
		[getAllRestaurants.fulfilled]: (state, action) => {
            state.allRestaurants = action.payload;
			state.allRestaurantsStatus = STATUS.SUCCESS;
			
		},
	},
});

//export const { resetLoginStatus } = userSlice.actions;
const restaurantReducer = restaurantSlice.reducer;
export default restaurantReducer;
