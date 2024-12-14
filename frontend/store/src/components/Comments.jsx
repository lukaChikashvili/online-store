import { MessageSquare } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useCreateReviewMutation, useGetSpecificBlogQuery,  } from '../redux/api/blogApiSlice';
import { useParams } from 'react-router';
import ShowComments from './ShowComments';
import { useSelector } from 'react-redux';

const Comments = () => {

    const { id: blogId} = useParams();
    const {data: blogs, refetch} = useGetSpecificBlogQuery(blogId);
    const [comment, setComment] = useState('');

    const [createReview] = useCreateReviewMutation();

    

    // write comment
    const handleComment = async() => {
       try {
           
         await createReview({blogId, comment}).unwrap();
        refetch();
      
          
       } catch (error) {
         
       }
    }

  

  return (
    <div className='w-full  h-screen flex flex-col  justify-center'>
        <div className='flex flex-col gap-4 w-full px-[10rem]'>
            <h1 className='flex items-center gap-2  text-2xl text-slate-500'><MessageSquare /> კომენტარები ({blogs?.numReviews})</h1>
            <span className='w-full bg-blue h-[0.5px]'></span>
          
            <textarea onChange={(e) => setComment(e.target.value)} value = {comment} className='w-[30rem] border shadow-md outline-none h-[4rem]' placeholder='დაწერეთ კომენტარი...' />

            <button onClick={handleComment}   className=" w-[14.5rem] relative group overflow-hidden px-8 py-1 bg-blue text-white rounded-md">
            <span className="absolute inset-0 bg-[#F29F58] transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 clip-path-curved"></span>
            <span className="relative z-10 text-md">გამოქვეყნება</span>
          
          </button>
        </div>

      <ShowComments />
    </div>
  )
}

export default Comments
