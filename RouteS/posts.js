const express = require('express');

const router= express.Router();
const Post=require('../models/Post');
const axios = require('axios');

//ALL POSTS
router.get('/',async (req,res) => {
    try{
        const posts= await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});

//SUBMITS A POST
router.post('/',async (req,res) => {
    // res.send('Recieved');
    const post =new Post({
        title:req.body.title,
        description:req.body.description
    });
    try{
        const savedPost= await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});


//SPECIFIC POST
router.get('/:postId',async (req,res) => {
    try{
        const post= await Post.findById(req.params.postId);
        console.log(post);
        res.json(post);
    }catch(err){
        res.json({message: err});
        console.log(error)
    }
});

//DELETE A SPECIFIC POST
router.delete('/:postId',async (req,res) => {
    try{
        const deletedPost= await Post.remove({_id: req.params.postId});
        res.json(deletedPost);
        console.log("deleted the post");
    }catch(err){
        res.json({message: err});
    }
});

//UPDATE A SPECIFIC POST
router.patch('/:postId',async (req,res) => {
    try{
        const updatedPost=await Post.update(
            {_id:req.params.postId},
             {$set:{title:req.body.title,description:req.body.description}}
             
             //,$set:{description:req.body.description}

            //{$addToSet:{description:req.body.description}}
        
            );
            console.log(title);
            console.log(description);
            res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
});


module.exports =router;

