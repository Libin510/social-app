const USRegister=require("../Schema/User")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt");

const data=async(req,res)=>{
    const {Name,email,Image,password}=req.body;
    const mail=await USRegister.findOne({email})
    const  salt = await bcrypt.genSalt(10);

    const hasheddata=  await bcrypt.hash(password,salt)

    if(mail){
        res.json('User already exist')
    }
    

    else{

    const createuser = await USRegister.create({
        Image,
        Name,
        email,
        password:hasheddata
    })
    res.json({createuser,token:generatetoken(USRegister._id)})
}   
};
const generatetoken=(id)=>{
    return jwt.sign({id},process.env.jwt_secret,{
        expiresIn:"1d",
    })
}
module.exports=data