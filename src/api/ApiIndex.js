import apiClient from './ApiClient';
import URIS from './URL';

// this file is managing type of request => POST,PATCH,DELETE,GET

// const getAllData = (payload) => apiClient.get(URIS.GETDATA, payload);

const getAllPosts = (payload) => apiClient.get(URIS.GET_POSTS, payload);



const apis = {
	getAllPosts,
};
export default apis;
