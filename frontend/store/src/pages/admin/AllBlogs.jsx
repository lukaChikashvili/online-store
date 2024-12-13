import React from 'react'
import { useAllBlogsQuery } from '../../redux/api/blogApiSlice'
import { Loader } from 'lucide-react';
import { Link } from 'react-router-dom';

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

        <div>
            {blogs.map((value) => (
                  <Link key = {value._id} to = {`/admin/blog/update/${value._id}`}>
                     <div>
                        <img src = {value.image} />
                        <h1 className='text-2xl text-blue font-bold'>{value.name}</h1>
                        <p>{value.text}</p>
                     </div>
                  </Link>
            ))}
        </div>
    </div>
  )
}

export default AllBlogs
