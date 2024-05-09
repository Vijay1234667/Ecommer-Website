const mongoose=require('mongoose')

mongoose.connect("mongodb://:0.0.0.0:/ECOM")
.then(()=>{
    console.log('mongodb connected');
})
.catch(()=>{
    console.log('error')
})

const ecomSchema=new mongoose.Schema({


    name:{
        type:String,
        required:true
    }

})


const collection=new mongoose.model('Ecom',ecomSchema)