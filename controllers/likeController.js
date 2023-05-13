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
            message: "Successfully liked the post !!",
        });
    } catch (error) {
        return res.status(500).json({
            message : "Couldn't like !!",
            error: error,
        })
    }
};

//Unlike a post
exports.unlikePost = async(req,res) => {
    try {
        const {post, like} = req.body;
        //deleting from like schema
        const deletedLike = await Like.findByIdAndDelete(like);
        //updating the post schema
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull : {likes: deletedLike._id}}, {new: true})
            populate("likes").exec();
        res.status(200).json({
            post: updatedPost,
            message: "Unliked successfully !!",
        })
    } catch (error) {
        return res.status(500).json({
            message : "Couldn't unlike !!",
            error: error,
        })
    }
}