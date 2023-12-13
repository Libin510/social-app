const mongoose=require('mongoose')


const Register=mongoose.Schema({
    Image:{type:String},
    Name:{type:String},
    email:{type:String},
    password:{type:String}
})

const USRegister=mongoose.model("Usermedia",Register)

module.exports=USRegister