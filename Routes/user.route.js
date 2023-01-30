const express = require('express');
const {UserModel} = require('../Models/user.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const routeUser = express.Router();



routeUser.post('/register',async (req,res)=>{
    let {email,pass,age,name} = req.body;
    try {
        bcrypt.hash(pass,10,async (err,hash)=>{
           if(err){
            console.log(err)
           } else{
            let temp = new UserModel({email,pass:hash,age,name});
            await temp.save();
            console.log(temp);
            res.send('Registered');
           }
        })
      
    } catch (error) {
        console.log(error)
    }
})

routeUser.post('/login',async (req,res)=>{
    const {email,pass} = req.body;
    try {
        const user = await UserModel.find({email});
        const token = jwt.sign({course : 'backend'}, 'masai');
        if(user.length>0){
            bcrypt.compare(pass,user[0].pass,async (err,result)=>{
            if(result){
                res.send({msg:"Login success", token : token})
            }else{
                res.send("wrong credentials")
            }
            })
        }else{
            res.send('Invalid Credntials');
        }
       
      
    } catch (error) {
        console.log(error)
    }
})


module.exports = {
    routeUser
}