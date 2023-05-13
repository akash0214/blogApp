const Post = require('../models/postModel');
const Like = require('../models/likeModel');

//To like a post
exports.likePost = async(req,res) => {
    try {
        const {post, user} = req.body;
        const like = new Like({
            post, user,
        });
        const savedLike = await like.save();
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id}}, {new: true})
            .populate("likes").exec();
        res.status(200).json({
            post: updatedPost,
        });
    } catch (error) {
        return res.status(500).json({
            message : "Couldn't like !!",
            error: error,
        })
    }
}