const Comment = require('../models/commentModel');
const Post = require('../models/postModel');

exports.createComment = async (req,res) => {
    try {
        //fetching the post id, user name and body of comment
        const {post, user, body} = req.body();
        //creating a new object of comment
        const newComment = new Comment({
            post, user, body
        });
        //saving the new comment object in db
        const savedComment = await newComment.save();
        //now also updating the post model by adding the new comment entry in the comment array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {comments: savedComment._id}},{new: true})
        .populate("comments")
        .exec();
        res.status(201).json({
            post: updatedPost,
            message: "Comment added successfully !!",
        })
    } catch (error) {
        return res.status(500).json({
            error: "Error while creating the comment !!",
        });
    }
};