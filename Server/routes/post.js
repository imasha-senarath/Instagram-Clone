const e = require('express')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post = mongoose.model("Post")
const requireLogin = require('../middleware/requirelogin')

router.get('/getallpost', requireLogin,     (req, res)=>{
    Post.find()
    .populate("postOwner", "_id name")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    }) 
})


router.get('/getmypost',requireLogin, (req, res)=>{
    Post.find({postOwner:req.user._id})
    .populate("postOwner", "_id name")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})


router.post('/createpost',requireLogin,(req, res) =>{
    const {description} = req.body
    if(!description) {
        return res.status(422).json({error:"Fiels cannot be empty."})
    }
    req.user.password = undefined
    const post = new Post({
        description,
        postOwner: req.user 
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports = router