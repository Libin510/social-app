const express=require('express')
const USRegister=require("../Schema/User")

const app=express()

const getdata=async (req,res)=>{
    const data=await USRegister.find()
    res.json(data)
}

module.exports =getdata