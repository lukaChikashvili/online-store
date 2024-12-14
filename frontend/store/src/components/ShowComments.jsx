import React from 'react'
import { useGetSpecificBlogQuery } from '../redux/api/blogApiSlice';
import { useParams } from 'react-router';

const ShowComments = () => {
    const { id: blogId} = useParams();
    const {data: blogs} = useGetSpecificBlogQuery(blogId);


  return (
    <div>
        <div className='w-full px-[10rem] mt-8 flex flex-col gap-6'>
            {blogs?.reviews.map((value) => (
                <div key={value._id} className='w-1/2 bg-slate-300 p-4 rounded-md shadow-md flex flex-col gap-6'>
                    <div className='flex justify-between  '>
                    <h2 className='text-xl text-blue font-bold underline underline-offset-8'>{value.name}</h2>
                    <span className='font-bold italic text-slate-600'>{value.createdAt.substring(0, 10)}</span>
                    </div>
                    <p>{value.comment}</p>
                    
                    </div>
            ))}
        </div>
    </div>
  )
}

export default ShowComments
