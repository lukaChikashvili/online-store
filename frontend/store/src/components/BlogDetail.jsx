import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useCreateReviewMutation, useGetSpecificBlogQuery } from '../redux/api/blogApiSlice';
import { useSelector } from 'react-redux';
import { ArrowLeft } from 'lucide-react';
import Comments from './Comments';


const BlogDetail = () => {

  const { userInfo } = useSelector(state => state.auth);


    const { id: blogId} = useParams();
    const navigate = useNavigate();

    const {data: blogs} = useGetSpecificBlogQuery(blogId);




    
  return (
    <div className='w-full flex flex-col gap-4 items-center justify-center mt-12'>
        <span onClick = {() => navigate('/blogs')} className='mr-[80rem] underline-offset-4 cursor-pointer text-slate-500 font-bold duration-500 ease-in hover:underline flex gap-4'><ArrowLeft /> უკან დაბრუნება</span>
       <div className='flex items-center justify-center px-[10rem] gap-[5rem] mt-12'>
        <div className='flex flex-col gap-12 '>
        <h1 className='text-center text-3xl text-blue font-bold'>{blogs?.name}</h1>
         <p className='w-full text-xl leading-[2.5rem]'>{blogs?.text}</p>
        </div>

         <img src = {blogs?.image} className='w-[30rem] h-[30rem]  rounded-md shadow-lg' />
         
       </div>

      <Comments />
    </div>
  )
}

export default BlogDetail
