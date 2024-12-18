import React from 'react'
import { useAllBlogsQuery } from '../redux/api/blogApiSlice';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../redux/constants';


const LatestBlog = () => {
    const {data: blogs} = useAllBlogsQuery();

    const sortedBlogs = blogs?.slice()?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const latestBlogs = sortedBlogs?.slice(0, 3);
  return (
    <div className='w-full h-screen bg-blue '>
       <div className='flex flex-col items-center pt-12'>
       <h1 className='text-3xl font-bold text-white'>უახლესი ბლოგი</h1>
         
         <div className='bg-white p-12 mt-12 rounded-md shadow-lg flex gap-8'>
            {latestBlogs?.map((value) => (
                 <Link key = {value._id} to = {`/blogs/detail/${value._id}`}>
                 <div className='w-[20rem] flex flex-col gap-2 '>
                      <img src = {`${BASE_URL}${value.image}`} className='w-[20rem] h-[20rem] rounded-md shadow-lg cursor-pointer object-cover'/>
                      <h1 className='text-blue font-bold text-xl cursor-pointer duration-500 ease hover:underline'>{value.name}</h1>
                      <p>{value.text.substring(0, 25)}...</p>
                     </div>
                     </Link>
            ))}
         </div>
       </div>
    </div>
  )
}

export default LatestBlog
