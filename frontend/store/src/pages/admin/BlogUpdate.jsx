import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useDeleteBlogMutation, useGetSpecificBlogQuery, useUpdateBlogMutation, useUploadBlogImageMutation } from '../../redux/api/blogApiSlice';

const BlogUpdate = () => {

    const params = useParams();

    const { data: blogData } = useGetSpecificBlogQuery(params._id);

    const [image, setImage] = useState(blogData?.image || '');
    const [name, setName] = useState(blogData?.name || '');
    const [text, setText] = useState(blogData?.text || '');

    const [uploadBlogImage] = useUploadBlogImageMutation();
    const [updateBlog] = useUpdateBlogMutation();
    const [deleteBlog] = useDeleteBlogMutation();

    useEffect(() => {
       if(blogData && blogData._id) {
        setName(blogData.name);
        setText(blogData.text);
        setImage(blogData.image);

       }
    }, [blogData])
  return (
    <div>
      
    </div>
  )
}

export default BlogUpdate
