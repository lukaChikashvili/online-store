import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDeleteBlogMutation, useGetSpecificBlogQuery, useUpdateBlogMutation, useUploadBlogImageMutation } from '../../redux/api/blogApiSlice';

const BlogUpdate = () => {

  const { id: blogId} = useParams();
  const navigate = useNavigate();

  const {data: blogs } = useGetSpecificBlogQuery(blogId);

    const [image, setImage] = useState(blogs?.image || '');
    const [name, setName] = useState(blogs?.name || '');
    const [text, setText] = useState(blogs?.text || '');
    const [imgUrl, setImgUrl] = useState(null);

    const [uploadBlogImage] = useUploadBlogImageMutation();
    const [updateBlog] = useUpdateBlogMutation();
    const [deleteBlog] = useDeleteBlogMutation();

    useEffect(() => {
       if(blogs && blogs._id) {
        setName(blogs?.name);
        setText(blogs?.text);
        setImage(blogs?.image);

       }
       console.log(blogs)
    }, [blogs]);

    const uploadFileHandler = async (e) => {
      const formData = new FormData();
      formData.append('image', e.target.files[0]);

      try {
          const res = await uploadBlogImage(formData).unwrap();
          setImage(res.image);
          setImgUrl(`${BASE_URL}${res.image}`);
          
      } catch (error) {
         console.log(error);
      }
   }

  // update blog

   const handleSubmit = async(e) => {
    e.preventDefault();

    try {
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', name);
        formData.append('text', text);

        const { data } = await updateBlog({blogId, formData});

        
        if(data?.error) {
          console.log('there is an error');
        }else {
          navigate('/admin/allBlogs');
        }

    } catch (error) {
      console.error(error);
    }
  }


// delete blog

const handleDelete = async () => {
  try {

      let answer = window.confirm("ნამდვილად გსურთ წაშლა?");
      if(!answer) return;

      const { data } = deleteBlog(blogId);
      if(data?.error) {
        console.log(error);
      }
      navigate('/admin/allBlogs');

  } catch (error) {
    console.log(error);
  }
}
    
  return (
    <div className='w-full flex items-center justify-center px-[15rem] mt-4'>
        <div className='w-full flex flex-col gap-4'>
            <h1 className='text-2xl font-bold text-gray-700'>დაწერე პოსტი</h1>
            <span className='w-full bg-blue h-[0.5px]'></span>

            <div>
                <label className='border  px-4 block w-full text-center rounded-lg cursor-pointer py-11'>
                   {image ? image.name : "ატვირთეთ სურათი" }
                   <input type='file' name = "image"  accept= "image/*" onChange={uploadFileHandler} 
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

          <div className='flex gap-4'>
            <button onClick={handleSubmit} className=" w-[14.5rem] relative group overflow-hidden px-8 py-1 bg-green-400 text-white rounded-md">
            <span className="absolute inset-0 bg-green-600 transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 clip-path-curved"></span>
            <span className="relative z-10 text-md">რედაქტირება</span>
          </button>

          <button onClick={handleDelete} className=" w-[14.5rem] relative group overflow-hidden px-8 py-1 bg-red-500 text-white rounded-md">
            <span className="absolute inset-0 bg-red-600 transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 clip-path-curved"></span>
            <span className="relative z-10 text-md">წაშლა</span>
          </button>
          </div>
        </div>

        <div className='relative w-full bottom-[10rem] left-[10rem]'>
          {imgUrl && <img src = {imgUrl} className='w-[25rem] absolute rounded-md shadow-lg' />} 
        </div>

       
    </div>
  )
}

export default BlogUpdate
