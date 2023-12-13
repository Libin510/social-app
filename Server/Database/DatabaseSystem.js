const mongoose=require('mongoose')


const connectDBS=async()=>{
    try{
        const conn = await mongoose.connect("mongodb+srv://libinthomas758:libin123@cluster0.beusckd.mongodb.net/",{
            useNewurlparser:true,
            useUnifiedTopology:true,

        })
        console.log('database connected');
    } catch(error){
        console.log(`Error:${error}`);
        process.exit();
    }
}

module.exports=connectDBS