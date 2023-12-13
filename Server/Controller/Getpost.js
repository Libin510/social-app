const express=require('express')
const Post=require("../Schema/Post")

const app=express()

const getpost=async (req,res)=>{
    const data=await Post.find()
    res.json(data)
}

module.exports =getpost