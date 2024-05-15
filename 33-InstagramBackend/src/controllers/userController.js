const User=require("../models/userModel")

const getUserAll=async (req,res)=>{
    const users=await User.find()
    res.send(users)
};

const getUserById=async (req,res)=>{
    const getElem= await User.find({_id : req.params.id})
    res.send(getElem)
};

const postUser=async (req,res)=>{
    const obj=req.body
    const newUser= new User(obj)
    newUser.save()
    res.status(200).send("succes")
};

const deleteById=async (req,res)=>{
   await User.findByIdAndDelete({_id: req.params.id});
   res.send("succes")
};

const patchUserById=async (req,res)=>{
    const newUser = await User.findOneAndUpdate({_id: req.params.id},req.body) 
    res.send(newUser)
 };

 const putUserById=async (req,res)=>{
    const newUser = await User.findOneAndReplace({_id: req.params.id},req.body) 
    res.send(newUser)
 };

module.exports={getUserAll,postUser,getUserById,deleteById,patchUserById,putUserById}