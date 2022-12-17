import { create } from 'apisauce'
import BASE_URL from './BaseURL'

// define the api
const apiClient = create({
  baseURL: BASE_URL,
  headers: {  Accept: 'application/vnd.github.v3+json',
    }
            
})

export default apiClient
