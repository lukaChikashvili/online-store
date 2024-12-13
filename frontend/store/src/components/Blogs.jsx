import React from 'react'
import { useAllBlogsQuery } from '../redux/api/blogApiSlice'

const Blogs = () => {
    const {data: blogs} = useAllBlogsQuery();

  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 place-items-center px-[5rem] mt-12 '>
       {blogs?.map((value) => (
        <div className='w-[20rem] flex flex-col gap-2'>
             <img src = {value.image} className='w-[20rem] h-[20rem] rounded-md shadow-lg cursor-pointer'/>
             <h1 className='text-blue font-bold text-xl cursor-pointer duration-500 ease hover:underline'>{value.name}</h1>
             <p>{value.text.substring(0, 30)}...</p>
            </div>
       ))}
    </div>
  )
}

export default Blogs
