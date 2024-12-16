import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';
import { logout } from '../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    // Safely access the token
    const token = localStorage?.getItem('jwt');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // Check for invalid or expired token
  if (result?.error?.status === 401) {
    console.warn('Token is invalid or expired. Logging out...');
    // Dispatch logout and clear localStorage
    api.dispatch(logout());
    localStorage.clear();
    window.location.href = '/login'; // Redirect to login page
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['product', 'Order', 'User', 'Category'],
  endpoints: () => ({}),
});
