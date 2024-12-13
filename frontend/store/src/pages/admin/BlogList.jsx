import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { useCreateBlogMutation, useUploadBlogImageMutation } from '../../redux/api/blogApiSlice';

const BlogList = () => {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [text, setText] = useState('');

    const navigate = useNavigate();

    const [uploadBlogImage] = useUploadBlogImageMutation();
    const [createBlog] = useCreateBlogMutation();

  return (
    <div className='w-full flex items-center justify-center px-[15rem] mt-4'>
        <div className='w-full flex flex-col gap-4'>
            <h1 className='text-2xl font-bold text-gray-700'>დაწერე პოსტი</h1>
            <span className='w-full bg-blue h-[0.5px]'></span>

            <div>
                <label className='border  px-4 block w-full text-center rounded-lg cursor-pointer py-11'>
                   {image ? image.name : "ატვირთეთ სურათი" }
                   <input type='file' name = "image" accept=  "image/*" //onChange={uploadFileHandler} 
                   className = {!image ? "hidden" : "text-black"} />
                </label>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='flex flex-col '>
                <label htmlFor='name'>სათაური</label> <br />
                 <input type='text' value = {name} onChange={(e) => setName(e.target.value)} className='p-2  w-[30rem] border rounded-lg bg-slate-200 outline-none shadow-lg'  />
                 </div>

                 <div className='flex flex-col '>
                <label htmlFor='name'>ტექსტი</label> <br />
                 <textarea type='text'  value = {text} onChange={(e) => setText(e.target.value)} className='p-2 w-[30rem] h-[13rem] border rounded-lg bg-slate-200 outline-none shadow-lg'  />
                 </div>
            </div>

            <button className=" w-[30rem] relative group overflow-hidden px-8 py-1 bg-blue text-white rounded-md">
            <span className="absolute inset-0 bg-[#F29F58] transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 clip-path-curved"></span>
            <span className="relative z-10 text-md">გამოქვეყნება</span>
          </button>
        </div>
    </div>
  )
}

export default BlogList
