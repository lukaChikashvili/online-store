import { apiSlice } from "./apiSlice";
import { BLOGS_URL } from "../constants";


export const blogApiScice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        allBlogs: builder.query({
            query: () => `${ BLOGS_URL}/allBlogs`
        }),

        getSpecificBlog: builder.query({
            query: (blogId) => ({
               url:`${BLOGS_URL}/${blogId}`
            }),
            keepUnusedDataFor: 5,
        }),

        createBlog: builder.mutation({
            query: (blogData) => ({
               url: `${BLOGS_URL}`,
               method: 'POST',
               body: blogData
            })
        }),

        updateBlog: builder.mutation({
            query: (blogId, formData) => ({
               url: `${BLOGS_URL}/${blogId}`,
               method: 'PUT',
               body: formData
            })
        }),

        deleteBlog: builder.mutation({
            query: (blogId) => ({
                url: `${BLOGS_URL}/${blogId}`,
                method: 'DELETE',
            })
        }),

        createReview: builder.mutation({
            query: (data) => ({
                url: `${BLOGS_URL}/${data.blogId}/reviews`,
                method: 'POST',
                body: data
            }
             
            )
        })
    })
});


export const {useAllBlogsQuery, useCreateBlogMutation, 
    useDeleteBlogMutation, useCreateReviewMutation, useGetSpecificBlogQuery, 
    useUpdateBlogMutation} = blogApiScice;