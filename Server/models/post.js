const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:"no photo"
    },
    postOwner:{
        type:ObjectId,
        ref:"User"
    },
})

mongoose.model("Post", postSchema);