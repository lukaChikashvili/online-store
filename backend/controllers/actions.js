 const { User } = require('../models/userModel') 
const { asyncHandler } = require('../middlewares/asyncHandler');
const bcrypt = require("bcryptjs");
const createToken = require('../utils/createToken')


// create user

const createUser = asyncHandler(async(req, res) => {
   const { username, email, password} = req.body;

   if(!username || !email || !password) {
    throw new Error("გთხოვთ შეავსოთ ყველა ველი.");

   }

   const userExists = await User.findOne({email});

   if(userExists) res.status(400).send("მომხმარებელი უკვე არსებობს");

   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(password, salt);


   const newUser = new User({username, email, password: hashedPassword});

   try {
        await newUser.save();
        const token = createToken.generateToken(newUser._id);

        res.status(201).json({

            _id: newUser._id,
            username: newUser.username, 
            email: newUser.email, 
            isAdmin: newUser.isAdmin, 
            token
        })

   } catch (error) {
      res.status(400);
      throw new Error('invalid user data')
   }

})

// login user

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const existingUser = await User.findOne({ email });
  
    if (!existingUser) {
      return res.status(404).json({ message: 'მომხმარებელი ვერ მოიძებნა' });
    }
  
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
  
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'ელ-ფოსტა ან პაროლი არასწორია.' });
    }
  
    try {
      
      const token = createToken.generateToken(existingUser._id);
  
      

      
      return res.status(200).json({
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        isAdmin: existingUser.isAdmin,
        token,
      });
    } catch (error) {
     
      return res.status(500).json({ message: 'მონაცემები არასწორია' });
    }
  });
  

// logout user
const logoutUser = asyncHandler(async(req, res) => {
     

    res.status(200).json({message: "logged out successfully"});


})

// get all users
const getAllUsers = asyncHandler(async(req, res) => {
    const users = await User.find({});

    res.json(users);

})

// specific user
const getCurrentProfile = asyncHandler(async(req, res) => {
     const user = await User.findById(req.user._id);

     if(user) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email
        });
     }else {
        res.status(404);
        throw new Error('user not found');
     }
})

// update current profile
const updateCurrentProfile = asyncHandler(async(req, res) => {

    const user = await User.findById(req.user._id);

    if(user) {
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;

        if(req.body.password) {
           user.password = req.body.password;

        }

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            username:  updatedUser.username,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin
        });
    }else {
        res.status(404);
       throw new Error('user not found');
    }



})

// delete user
const deleteUser = asyncHandler(async(req, res) => {
  
    const user = await User.findById(req.params.id);

    if(user) {
        if(user.isAdmin) {
            res.status(400);
            throw new Error('cannot delete admin user');

        }

        await user.deleteOne({_id: user._id});
        res.json({message: 'user removed'});
    }else {
        res.status(404);
        res.json({message: "user not found"})
    }


})

// get user by id
const getUserById = asyncHandler(async(req, res) => {

   const user = await User.findById(req.params.id);

   if(user) {
      res.json(user);
   }else {
    res.status(404);
    throw new Error('user not found');

   }


})

// update user
const updateUser = asyncHandler(async(req, res) => {
  const user = await User.findById(req.params.id);

  if(user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.isAdmin = Boolean(req.body.isAdmin);

    const updatedUser = await user.save();

    res.json({
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin

    })

  }else {
    res.status(404);
    throw new Error('user not found');
  }
})

module.exports = {
    createUser,
    loginUser,
    logoutUser,
    getAllUsers,
    getCurrentProfile,
    updateCurrentProfile,
    deleteUser,
    getUserById,
    updateUser
}