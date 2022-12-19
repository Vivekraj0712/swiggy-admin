import { create } from 'apisauce';
import BASE_URL from './BaseURL';
// define the api
const apiClient = create({
	baseURL: BASE_URL,
	headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
    },
    // mode: 'no-cors',
});
export default apiClient;
