const { asyncHandler }  = require('../middlewares/asyncHandler');
const { Blog } = require('../models/blogModel');

// create blog
const createBlog = asyncHandler(async(req, res) => {
   const { name, text } = req.fields;
     
   try {
     // validation
   switch(true) {
    case !name:
       return res.json({error: "Name is required"})
       case !text:
       return res.json({error: "text is required"})
       
       
 }

 const blog = new Blog({...req.fields});
  await blog.save();
  res.json(blog);
 
   } catch (error) {
      res.status(400).json(error.message);
   }
  


});

// update blog
const updateBlog = asyncHandler(async(req, res) => {
    try {
        
        const { name, text } = req.fields;
     
        
          // validation
        switch(true) {
         case !name:
            return res.json({error: "Name is required"})
            case !text:
            return res.json({error: "text is required"})
            
            
      }

      const blog = await Blog.findByIdAndUpdate(req.params.id, {...req.fields}, {new: true});
     await blog.save();
      res.json(blog);



    } catch (error) {
        res.status(400).json(error.message);
    }
});

// remove blog
const removeBlog = asyncHandler(async(req, res) => {
    try {
        
       const blog = await Blog.findByIdAndDelete(req.params.id);
        res.json(blog);

    } catch (error) {
        res.json(error.message);
    }
});

// blogs by id
const fetchBlogsById = asyncHandler(async(req, res) => {
    try {

        const blog = await Blog.findById(req.params.id);

        if(blog) {
            return res.json(blog);
        }else {
            res.status(404);
            throw new Error('blog not found');
        }
        
    } catch (error) {
        console.error(error);
        res.status(404).json({error: "blog not found"});
    }
})



module.exports = {
    createBlog,
    updateBlog,
    removeBlog,
    fetchBlogsById
}