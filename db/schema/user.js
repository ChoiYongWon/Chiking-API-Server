var mongoose = require("mongoose")
const {Schema} = mongoose;
const userSchema = new Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    pw:{
        type:String,
        required: true,
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    vote:{
        type:Boolean,
        required:true
    },
    chicken_name:{
        type:String,
        required:true
    },
    chicken_type:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("User", userSchema)