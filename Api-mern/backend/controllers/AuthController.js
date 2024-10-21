const UserModel = require('../models/authModel')

const addUser = async(req,res) =>{
    try {
        const {name,email,password} = req.body
        // console.log(req.body);
        await UserModel.create({
            name:name,
            email:email,
            password:password
        })
        res.status(200).send({
            success :true,
            message : "User Added Successfully"     
        })  
    } catch (error) {
        res.status(500).send({
            success : false,
            message : error
            })
    }
}
const viewUser = async(req,res) =>{
    try {
        const users = await UserModel.find({});
        // console.log(users); 
      return  res.status(200).send({
            success : true,
            message : "Users Fetched Successfully",
            users
            }
        )
        // console.log(users);
        
        
    } catch (error) {
        res.status(500).send({
            success : false,
            message : error
            })
        
    }

}
const deleteUser = async(req,res)  =>{
    try {
        const deid = req.query.deleteid;
         await UserModel.findByIdAndDelete(deid);
        return res.status(200).send({
            success : true,
            message : "User Deleted Successfully"
            })
        
    } catch (error) {
      return  res.status(500).send({
            success : false,
            message : error
            })
    }
}
// for single record
const singleUser = async(req,res) =>{
    try {
      let user = await UserModel.findById(req.query.id)
      
            return res.status(200).send({
                success : true,
                message : "User Fetched Successfully",
                user
                }
                )
    } catch (error) {
        res.status(500).send({
            success : false,
            message : error
            })
    }
}

const updateUser = async(req,res) =>{
    try {
        const {id,name,email,password} = req.body;
        await UserModel.findByIdAndUpdate(id,{
            name : name,
            email : email,
            password : password
        })
        return res.status(200).send({
            success : true,
            message : "User Updated Successfully",
            
        })
    } catch (error) {
        return res.status(500).send({
            success : false,
            message : error
            })
    }

}
module.exports = {
    addUser,viewUser,deleteUser,updateUser,singleUser
}