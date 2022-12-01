import { createSlice, current,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const editPost=createAsyncThunk(
  "editPost",
  async (payload, thunkAPI) => {
    const response = await axios
    .patch(BASE_URL + "posts/"+payload.id,payload.data)
      .then((response) => response);

    if (response) {
      //console.log(response)
    
      return response.data;
    } else {
      return thunkAPI.rejectWithValue("Error getting Response");
    }
  }
);

export const addPost = createAsyncThunk(
  "addPost",
  async (payload, thunkAPI) => {
    const response = await axios
      .post(BASE_URL + "posts",payload.data)
      .then((response) => response);

    if (response) {
      return response.data;
    } else {
      return thunkAPI.rejectWithValue("Error getting Response");
    }
  }
);

export const getAllPosts = createAsyncThunk(
  "getAllPosts",
  async (payload, thunkAPI) => {
    const response = await axios
      .get(BASE_URL + "posts")
      .then((response) => response);

    if (response) {
      return response.data;
    } else {
      return thunkAPI.rejectWithValue("Error getting Response");
    }
  }
);

const STATUS = {
	NOT_STARTED: 0,
	SUCCESS: 1,
	FETCHING: 2,
	FAILED: 3,
  };
  


const initialState = {
  allPosts: [],
  editPostData:[],
  addPostData:[],
  addPostStatus:STATUS.NOT_STARTED,
  editPostStatus:STATUS.NOT_STARTED,
  getAllPostStatus:STATUS.NOT_STARTED
};


const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    //resetLoginStatus: (state) => {},
    //addEditedPost:(state)=>{console.log(state.allPosts)}
  },
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.getAllPostStatus = STATUS.FETCHING;
    },
    [getAllPosts.rejected]: (state) => {
      state.getAllPostStatus= STATUS.FAILED;
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.allPosts = action.payload;
	  state.getAllPostStatus= STATUS.SUCCESS;    
    },
    [editPost.pending]: (state) => {
      state.editPostStatus = STATUS.FETCHING;
    },
    [editPost.rejected]: (state) => {
      state.editPostStatus= STATUS.FAILED;
    },
    [editPost.fulfilled]: (state, action) => {
      state.editPostData= action.payload;            
      state.editPostStatus=STATUS.SUCCESS
      state.allPosts=current(state.allPosts).map((item)=>item.id===action.payload.id?{...item,title:action.payload.title,body:action.payload.body}:item)
    },
    [addPost.pending]: (state) => {
      state.addPostStatus = STATUS.FETCHING;
    },
    [addPost.rejected]: (state) => {
      state.addPostStatus= STATUS.FAILED;
    },
    [addPost.fulfilled]: (state, action) => {
      state.addPostData= action.payload;            
      state.addPostStatus=STATUS.SUCCESS
      //console.log([...current(state.allPosts),action.payload])
      state.allPosts=[...current(state.allPosts),action.payload]
    },
  },
});

const postsReducer = postsSlice.reducer;
export default postsReducer;
