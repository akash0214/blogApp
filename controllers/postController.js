const Post = require('../models/postModel');

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;
        // const newPost = new Post({
        //     title: title,
        //     body: body,
        // });
        const savedPost = await Post.create({ title, body });
        res.status(201).json({
            post: savedPost,
        });
    } catch (error) {
        return res.status(500).json({
            error: "Something went wrong while creating the post !!",
        });
    }
};
exports.getAllPosts = async(req,res) => {
    try {
        const posts = await Post.find().populate("comments").populate("likes").exec();
        res.status(200).json({
            posts: posts,
            message: "All posts fetched successfully !!",
        })
    } catch (error) {
        res.status(500).json({
            error: error,
            message: "Couldn't fetch all posts !!",
        })
    }
}
