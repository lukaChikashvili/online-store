import React from 'react'
import { useAllBlogsQuery } from '../redux/api/blogApiSlice'

const Blogs = () => {
    const {data: blogs} = useAllBlogsQuery();

  return (
    <div className='w-full px-[10rem] grid grid-cols-3 place-items-center gap-8 mt-8'>
       {blogs?.map((value) => (
        <div className='flex flex-col gal-4'>
             <img src = {value.image} className='w-[20rem] h-[20rem]'/>
             <h1>{value.name}</h1>
             <p>{value.text}</p>
            </div>
       ))}
    </div>
  )
}

export default Blogs
