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
})


module.exports = {
    createBlog,
    updateBlog
}