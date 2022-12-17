import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apis from '../../api/ApiIndex';

export const getAllDishes = createAsyncThunk('getAllDishes', async (payload, thunkAPI) => {
	
	const response = await apis.getAllDishes(payload)

	const { ok, problem, data } = response;
	if (ok) {
		
		return data;
	} else {
		console.log("problem",problem)
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
	allDishesStatus: STATUS.NOT_STARTED,
};


const dishSlice = createSlice({
	name: 'dish',
	initialState,
	reducers: {
		
	},
	extraReducers: {
		[getAllDishes.pending]: (state) => {
			state.allDishesStatus = STATUS.FETCHING;
		},
		[getAllDishes.rejected]: (state) => {
			
			state.allDishesStatus = STATUS.FAILED;
		},
		
		[getAllDishes.fulfilled]: (state, action) => {
			
            state.allDishes = action.payload;
			state.allDishesStatus = STATUS.SUCCESS;
			
		},
	},
});

//export const { resetLoginStatus } = userSlice.actions;
const dishReducer = dishSlice.reducer;
export default dishReducer;
