import apiClient from './ApiClient';
import URIS from './URL';

// this file is managing type of request => POST,PATCH,DELETE,GET

const getAllRestaurants = (payload) => apiClient.get(URIS.GET_RESTAURANTS, payload);

//Dishes
const getAllDishes = (payload) => apiClient.get(URIS.GET_DISHES, payload);

const apis = {
	getAllRestaurants,
	getAllDishes,
};
export default apis;
