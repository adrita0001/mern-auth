import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// the route will be -     api/users/auth
// authUser will be public route

const authUser = asyncHandler(async(req,res) =>{
    // res.status(401)
    // throw new Error ('Something went wrong!')
    res.status(200).json({message : 'authUser created successfully!'})
})

// register a new user
// post request  /api/users
// access - public

const registerUser = asyncHandler(async(req,res) =>{
    const {name , email, phone} = req.body;
    const userExists = await User.findOne({email});
//  for already existed user (only the email should be unique)
    if(userExists){
        res.status(400);
        throw new Error ('User already existed')
    }

    // for creating new user 
     
    const user = await User.create({
        name,
        email, 
        password
    });

    // it will check if user is created or not

    if(user){
        res.status(201).json({
            _id: user._id,
            email: user.email,
            name: user.name
        }) 
    } else{
        res.status(400)
        throw new Error('Invalid user data!')
    }
    // console.log(req.body)
    // res.status(200).json({message : 'This is user registration route'})
})

// log out an user
// post request /api/users/logout
// access - public

const logoutUser = asyncHandler(async(req,res) =>{
    res.status(200).json({message : 'This is the logout user!'})
})

// User profile
// get request /api/users/profile 
// access - Private ( here private means, I have to have the access token for getting the users profile)

const getUserProfile = asyncHandler(async(req,res) =>{
    res.status(200).json({message : 'This is the user Profile!'})
})

// userUpdate Profile 
// PUT request /api/users/profile/update
// access - private

const updateUserProfile = asyncHandler(async(req,res)=>{
    res.status(200).json({message : 'This is the update Profile'})
})



export {authUser,registerUser,logoutUser,getUserProfile,updateUserProfile}