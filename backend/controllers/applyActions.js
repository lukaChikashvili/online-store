const { asyncHandler } = require("../middlewares/asyncHandler");
const { Apply } = require("../models/applyModel");

const applyTo = asyncHandler(async(req, res) => {
     
    const { name, surname, email, phone, category, visit } = req.body;

    try {
         
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized. Please log in." });
        }


        const appointment = new Apply({
            name,
            surname,
            email,
            phone,
            category,
            visit,
            user: req.user._id,
                
            
        });
        
        await appointment.save();

        res.status(201).json({ message: "You booked an appointment successfully" });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


const allBooks = asyncHandler(async(req, res) => {
    try {
      
        const applications = await Apply.find({});

       
        res.status(200).json({
            success: true,
            data: applications
        });
    } catch (error) {
        
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
    
});


const deleteBook = asyncHandler(async(req, res) => {
    const book = await Apply.findById(req.params.id);
     
    if(book) {
        await book.deleteOne();
        res.json({message: 'book removed'});
    }else {
        res.status(404);
        res.json({message: "book not found"})
    }
    


})



module.exports = {
    applyTo,
    allBooks,
    deleteBook
}