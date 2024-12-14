import { APPLY_URL } from "../constants";
import { apiSlice } from "./apiSlice";



export const applyApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createApply: builder.mutation({
            query: (data) => ({
              url: `${APPLY_URL}`,
              method: 'POST',
              body: data
            })
        }),

        allAplications: builder.query({
            query: () => ({
                url: `${APPLY_URL}/aplications`
            })
        })
    })
});


export const {
    useCreateApplyMutation, useAllAplicationsQuery
} = applyApiSlice;