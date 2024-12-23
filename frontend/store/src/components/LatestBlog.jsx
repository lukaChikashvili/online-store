import React from 'react'
import { useAllBlogsQuery } from '../redux/api/blogApiSlice';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../redux/constants';

const LatestBlog = () => {
    const {data: blogs} = useAllBlogsQuery();

    const sortedBlogs = blogs?.slice()?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const latestBlogs = sortedBlogs?.slice(0, 3);

    const handleImageError = (event) => {
      event.target.src = 'https://baia-frontend.onrender.com/assets/logo-CS001Qi1.png ';
  };
  
  return (
    <div className='w-full min-h-screen bg-blue mt-[5rem] md:mt-[1rem]'>
       <div className='flex flex-col items-center pt-12'>
       <h1 className='text-3xl font-bold text-white'>უახლესი ბლოგი</h1>
         
         <div className='bg-white p-12 mt-12 rounded-md shadow-lg w-full max-w-screen-xl'>
            {blogs?.length === 0 ?  (<span>პოსტები არ არის</span>) : 
            (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {latestBlogs?.map((value) => (
                        <Link key={value._id} to={`/blogs/detail/${value._id}`}>
                            <div className='flex flex-col gap-2'>
                                <img onError={handleImageError} src={`${BASE_URL}${value.image}`} className='w-full h-[15rem] sm:h-[20rem] lg:h-[20rem] rounded-md shadow-lg cursor-pointer object-cover'/>
                                <h1 className='text-blue font-bold text-xl cursor-pointer duration-500 ease hover:underline'>{value.name}</h1>
                                <p className='text-sm sm:text-base' dangerouslySetInnerHTML={{ __html: blogs?.text.substring(0, 25) }}></p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
         </div>
       </div>
    </div>
  )
}

export default LatestBlog
