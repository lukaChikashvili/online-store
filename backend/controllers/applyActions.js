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
            user: {
                id: req.user._id,
                name: req.user.username,
                
            }
        });
        
        await appointment.save();

        res.status(201).json({ message: "You booked an appointment successfully" });

    } catch (error) {
        res.status(400).json({error: message});
    }
});




module.exports = {
    applyTo
}