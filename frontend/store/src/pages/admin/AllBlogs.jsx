import React, { useEffect } from 'react'
import { useAllBlogsQuery } from '../../redux/api/blogApiSlice'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../redux/constants';
import Loader from '../../components/Loader';

const AllBlogs = () => {
    const { data: blogs, isLoading} = useAllBlogsQuery();

    
        if(isLoading) {
            return <Loader />
        }
  

    
  return (
    <div className='w-full px-[10rem] mt-8'>
        <div>
            <h1 className='text-3xl font-bold'>ყველა ბლოგი ({blogs.length})</h1>
        </div>

        <div className='mt-8 flex items-center flex-wrap gap-12 justify-center'>
            {blogs.map((value) => (
                  <Link key = {value._id} to = {`/admin/blog/update/${value._id}`}>
                     <div className='flex flex-col items-center gap-4 bg-slate-300 w-[30rem] p-4 rounded-md shadow-lg'>
                        <img src = {`${BASE_URL}${value.image}`} className='w-[15rem] h-[15rem] rounded-md shadow-lg object-cover' />
                        <h1 className='text-2xl text-blue font-bold duration-500 ease hover:underline'>{value.name}</h1>
                        <p>{value.text.substring(0, 70)}...</p>
                       
                     </div>
                  </Link>
            ))}
        </div>
    </div>
  )
}

export default AllBlogs
