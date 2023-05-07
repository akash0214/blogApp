const Post = require('../models/postModel');

exports.createPost = async (req, res) => {
    try {
        const {title, body} = req.body;
        const newPost = new Post({
            title, body,
        });
        const savedPost = await newPost.save();
        res.status(201).json({
            post: savedPost,
        });
    } catch (error) {
        return res.status(500).json({
            error: "Something went wrong while creating the post !!",
        });
    }
};
