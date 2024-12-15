import { fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants'

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL, prepareHeaders: (headers, { getState }) => {
        
    const token = localStorage.getItem('jwt');

    if (token) {
        headers.set('Authorization', `Bearer ${token}`); 
    }

    return headers;
}, });


export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['product', 'Order', "User", "Category"],
    

    endpoints: () => ({})
 })